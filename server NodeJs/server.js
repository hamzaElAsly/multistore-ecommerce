import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
// import cookieParser from 'cookie-parser';
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: false,
            maxAge: 1000 * 60 * 60 * 24
        }
    }
))

// Connection / Enregistrement :
app.post("/login", (req, res) => { 
    const { email, pass } = req.body;
    if (!email) { return res.json({ message: "Veuillez fournir un email." });}
    if (!pass) { return res.json({ message: "Veuillez fournir un mot de passe." }); }
    const query = "SELECT * FROM clients WHERE email = ?";
    db.query(query, [email], (err, data) => {
        if (err) { return res.status(500).json({ message: "Erreur serveur.", error: err }); }
        if (data.length === 0) { return res.json({ message: "Utilisateur non trouvé !!" }); }
        const user = data[0];
        
        if (user.pass === pass) {
            // req.session.user = {
            //     id: user.id_Client,
            //     prenom: user.prenom,
            //     nom: user.nom,
            //     email: user.email,
            // };
            // res.cookie('userId', user.id_Client, { maxAge: 1000 * 60 * 60 * 24 });
            // console.log( "req.session.user : ",req.session.user)
            console.log("Utilisateur : ", user);
            return res.status(200).json({ user }); // message: "Connexion réussie.", 
        } else {
            return res.json({ message: "Mot de passe incorrect !!!" });
        }
    });
    console.log("Données reçues : ", { email, pass });
});

app.post("/inscrire", (req, res) => {
    const { prénom, nom, date, civ, adresse, codeP, ville, tel, pass, email } = req.body;
    const id = "SELECT id_Client FROM clients ORDER BY id_Client DESC LIMIT 1";
    db.query(id, (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération de l'ID : ", err);
            return res.status(500).json({ message: "Erreur lors de l'inscription" }); }
        const newId = results.length > 0 ? results[0].id_Client + 1 : 1;
        // console.log(newId);
        const insertClient ="INSERT INTO clients (id_Client, prenom, nom, dateN, civilite, adresse, codePostal, ville, telephone, pass, email, montant, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0.00, NOW(), NOW()) ";
        db.query(insertClient, [newId, prénom, nom, date, civ, adresse, codeP, ville, tel, pass, email], (err, data) => {
            if (err) {
                console.error("Erreur lors de l'insertion : ", err);
                return res.status(500).json({ message: "Erreur lors de l'inscription" });
            }
            return res.status(200).json({ message: "Inscription réussie !" });
        });
    });
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'multistore',
    port: 3306,
});

app.get('/', async (req, res) => {
    const getTablesQuery = `SHOW TABLES FROM multistore`;
    db.query(getTablesQuery, async (err, tables) => {
        if (err) { return res.json({ Message: 'Erreur lors de la récupération des tables', Error: err }); };
        const tableNames = tables.map(row => Object.values(row)[0]);
        const tableAttributes = {};
        const columnPromises = tableNames.map(tableName => {
            return new Promise((resolve, reject) => {
                const describeQuery = `SELECT * FROM ${tableName}`;
                db.query(describeQuery, (err, columns) => {
                    if (err) return reject(err);
                    tableAttributes[tableName] = columns;
                    resolve();
                });
            });
        });
        try {
            await Promise.all(columnPromises);
            return res.json(tableAttributes);
        } catch (error) { return res.json({ Message: 'Erreur lors de la récupération des colonnes', Error: error }); }
    });
});
// ===================== PANIER ==========================================

// app.get('/cart', (req, res) => {
//     let cart = JSON.parse(localStorage.getItem('Liste panier')) || [];
//     console.log(cart);
//     res.cookie('Paniers', JSON.stringify(cart.map(item => item.id)), { maxAge: 1000 * 60 * 60 * 24 });
//     res.json({ cart });
// });

// app.get('/cart', (req, res) => {
//     let cart = req.session.cart || [];
//     res.cookie('Paniers', JSON.stringify(cart.map(item => item.id)), { maxAge: 1000 * 60 * 60 * 24 });
//     res.json({ cart });
// });

// // Route pour ajouter un article au panier
// app.post('/add-to-cart', (req, res) => {
//     const { id, nom, prix_TVAC, image, quantity } = req.body;
//     if (!req.session.cart) {  req.session.cart = []; }
//     const existingItem = req.session.cart.find(item => item.id === id);
//     if (existingItem) { existingItem.quantity += 1; } 
//     else { req.session.cart.push({ id, nom, prix_TVAC, image, quantity}); }
//     console.log(req.session.cart)
//     res.status(200).json({ message: 'Article ajouté au panier', cart: req.session.cart });
// });

// app.post("/update-cart", (req, res) => {
//     const { cart } = req.body;
//     // Traitement ou sauvegarde du panier dans une base de données
//     console.log("Panier reçu :", cart);
//     res.status(200).json({ message: "Panier mis à jour avec succès !" });
//   });

// // Route pour vider le panier
// app.post('/clear-cart', (req, res) => {
//     req.session.cart = []; 
//     res.cookie('Paniers', JSON.stringify([]), { maxAge: 1000 * 60 * 60 * 24 });
//     res.status(200).json({ message: 'Panier vidé avec succès', cart: req.session.cart });
// });

// ===================== COMMANDE & LIGNE-COMMANDE ==============================


// Ajouter une commande avec ses lignes
app.post("/addCommande", (req, res) => {
    const { prénom, nom, adresse, codePostal, ville, telephone, email, numero_Cmd, paiement, ligneCommande } = req.body;
    console.log("Requête reçue :", req.body);
    const insertCl = `
        INSERT INTO clients (prenom, nom, dateN, civilite, adresse, codePostal, ville, telephone, pass, email, montant, created_at, updated_at) 
        VALUES (?, ?, '1999-01-01', 'M', ?, ?, ?, ?, '12345678', ?, 10000.00, NOW(), NOW())`;
    db.query(insertCl, [prénom, nom, adresse, codePostal, ville, telephone, email], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion du client :", err);
            return res.status(500).json({ message: "Erreur lors de l'inscription du client" });
        }
        
        const idClient = result.insertId;
        const sqlCommande = `INSERT INTO commandes (idClient, numero_Cmd, paiement, statut, created_at, updated_at) VALUES (?, ?, ?, 'En attente', NOW(), NOW())`;
        db.query(sqlCommande, [idClient, numero_Cmd, paiement], (err, result) => {
            if (err) {
                console.error("Erreur de commande :", err);
                return res.status(500).json({ message: "Problème lors de la création de la commande" });
            }
            const idCommande = result.insertId; 
            const sqlLigneCommande = `INSERT INTO ligne_commandes (idCommande, idArticle, qte_Ligne_Cmd, prixTotal, created_at, updated_at) VALUES ? `;
            const values = ligneCommande.map(i => [
                idCommande, 
                i.idArticle, 
                i.qte_Ligne_Cmd, 
                i.prixTotal,
                new Date(),
                new Date()
            ]);

            db.query(sqlLigneCommande, [values], (err) => {
                if (err) {
                    console.error("Erreur lors de l'insertion des lignes de commande :", err);
                    return res.status(500).json({ message: "Erreur lors de l'ajoute des lignes de commande" });
                }
                res.json({ message: "Client, commande et lignes ajoutés avec succès", 
                    idCommande: idCommande, 
                    idClient: idClient, 
                    ligneCommande: ligneCommande });
            });
        });
    });
});





// Lancement du serveur
app.listen(8081, () => {
    console.log('Server hwa hadak');
});
