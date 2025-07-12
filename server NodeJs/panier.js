import express from 'express';
// import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
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
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 * 24
        }
    }
))

// ===================== PANIER ==========================================

// Route pour récupérer le panier
app.get('/cart', (req, res) => {
    if (!req.session.cart) { req.session.cart = []; }
    console.log(req.session.cart);
    res.cookie('Paniers', JSON.stringify(req.session.cart.map(item => item.id)), { maxAge: 1000 * 60 * 60 * 24 });
    res.json({ cart: req.session.cart });
});

// Route pour ajouter un article au panier
app.post('/add-to-cart', (req, res) => {
    const { id, nom, prix_TVAC, image } = req.body;
    if (!req.session.cart) { req.session.cart = []; }
    const existingItem = req.session.cart.find(item => item.id === id);
    if (existingItem) { existingItem.quantity += 1; } 
    else { req.session.cart.push({ id, nom, prix_TVAC, image, quantity: 1 }); }
    console.log(req.session.cart)
    res.status(200).json({ message: 'Article ajouté au panier', cart: req.session.cart });
});

// app.post("/update-cart", (req, res) => {
//     const { cart } = req.body;
//     // Traitement ou sauvegarde du panier dans une base de données
//     console.log("Panier reçu :", cart);
//     res.status(200).json({ message: "Panier mis à jour avec succès !" });
//   });

// Route pour vider le panier
app.post('/clear-cart', (req, res) => {
    req.session.cart = []; 
    res.cookie('Paniers', JSON.stringify([]), { maxAge: 1000 * 60 * 60 * 24 });
    res.status(200).json({ message: 'Panier vidé avec succès', cart: req.session.cart });
});

app.listen(8081, () => {
    console.log('Server hwa hadak');
});