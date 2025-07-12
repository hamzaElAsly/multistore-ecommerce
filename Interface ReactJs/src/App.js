import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'cookie-universal';


import Acceuil from "./acceuil";
import Caisse from './caisse';
import Favorie from './favorie';
import Login from './login';
import Panier from './panier';
import Test from './test';
import Profil from './profil';
// import Footer from './footer';

const cookies = Cookies();

function App() {

  // Base de données
  const [db, setDb] = useState({articles: [], categories: [], clients:[], commandes:[], ligne_commandes:[], regions:[], villes:[]});

  useEffect(()=>{
        axios('http://localhost:8081/')
          .then( res => setDb(res.data))
          .catch(err => console.log(err));
  },[])

    // Utilisateur 
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
    const [user, setUser] = useState();
    useEffect(() => {
        const userCl = cookies.get('User') || [];
        setUser(userCl);
    }, []);

    const handleLogin = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8081/login', { email: mail, pass: pwd })
        .then(res => { 
          setUser(res.data)
          cookies.set('User', user.user, { path: '/', maxAge: 60 * 60 * 24 * 60 });
          console.log(user);
          // window.location.pathname('/')
          })
        .catch(err => { setUser("Une erreur est survenue lors de la connexion.", err); }
      );
    };
  
  // List des Favories
  const [favorie, setFav] = useState([]);
  useEffect(() => {
      const listeFav = cookies.get('Favories') || [];
      setFav(listeFav);
  }, []);

  const addFavorie = (art) => {
    try {
      let newFav = [...favorie];
      newFav.push({ id: art.id_Article, nom: art.nom, prix_TVAC: art.prix_TVAC, image: art.image });
      setFav(newFav);
      cookies.set('Favories', newFav, { path: '/', maxAge: 60 * 60 * 24 * 30 });
      toast.success('Article ajouté au favorie !');
    }
    catch{
      toast.error('Erreur lors de l\'ajout au favorie.');
    }
  };

  // List des Paniers
  const [panier, setPanier] = useState([]);
  useEffect(() => {
      const listePn = cookies.get('Panier') || [];
      setPanier(listePn);
  }, []);

  // Ajouter un panier
  const addPanier = (art) => {
    try {
      let newPn = [...panier];
      const article = newPn.find(item => item.id === art.id_Article); 
      if (article) {
          article.quantity += 1;
          article.prix_Total = article.prix_TVAC * article.quantity;
      } else {
          newPn.push({
              id: art.id_Article, nom: art.nom, prix_TVAC: art.prix_TVAC, image: art.image, quantity: 1, prix_Total : art.prix_TVAC * 1
          });
        }
      setPanier(newPn);
      cookies.set('Panier', newPn, { path: '/', maxAge: 60 * 60 * 24 * 30 });
      toast.success('Article ajouté au panier !');
    }
    catch{
      toast.error('Erreur lors de l\'ajout au panier.');
    }
  };

  // Effacer les paniers
    const handleSupp = () => {
        try {
            let newPn;
            newPn = [];
            toast.success("Tous les articles ont été supprimés du panier !");
            setPanier(newPn);
            cookies.set('Panier', newPn, { path: '/', maxAge: 60 * 60 * 24 * 30 });
        } catch (error) {
            toast.error("Une erreur est survenue lors de la suppression du panier.");
        }
    };

  // Modifier les paniers
  const handeleUpdate = async () =>{
    try {
      const response = await axios.post('http://localhost:8081/update-cart', { withCredentials: true });
      if (response.status === 200) {
        setPanier(response.data.cart);
        toast.success('Article été modifié à votre panier !');
        console.log(panier)
      }
    } catch (error) {
      console.error("Erreur lors de la modification du panier :", error);
      toast.error("Une erreur est survenue lors de la modification du panier.");
    }
  }

  return (
    <div className="home">
      <BrowserRouter>
        <Routes>          
          <Route path='/' element={<Acceuil data={db} addPn={addPanier} addFav={addFavorie} panier={panier} Tc={ToastContainer} user={user} />} />
          <Route path='/panier' element={<Panier data={db} panier={panier} suppPn={handleSupp} Tc={ToastContainer} update={handeleUpdate} />}  />
          <Route path='/favorie' element={<Favorie data={db} addPn={addPanier} panier={panier} fav={favorie} Tc={ToastContainer} />}  />
          <Route path='/caisse' element={<Caisse data={db} panier={panier} />} />
          <Route path='/profil' element={<Profil data={db} panier={panier} user={user} />} />
          <Route path='/Connection' element={<Login handleLogin={handleLogin} mail={mail} setMail={setMail} pwd={pwd} setPwd={setPwd} us={user} />} />
          <Route path='/test' element={<Test />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
