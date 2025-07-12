import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import Header from "./header";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./footer";

export default function Caisse({data, panier}){

  // Régions & Villes
  const [selectedRegion, setSelectedRegion] = useState();
  const [filteredVilles, setFilteredVilles] = useState([]);
  const handleRegionChange = (event) => {
    const regionId = Number(event.target.value);
    setSelectedRegion(regionId);
    if (regionId !== "default") { setFilteredVilles(data.villes.filter(v => v.id_Region === regionId)); } 
    else { setFilteredVilles([]); }
  };

  // Livraison 
  const livraison =()=>{ return totalGeneral <= 1000 ? 25 : 0 }
  const totalGeneral = panier.reduce((acc, p) => acc + p.prix_Total, 0);

  // Login de client

  const [prénom, setPrénom] =  useState("");
  const [nom, setNom] =  useState("");
  // const [dn, setDn] =  useState("");
  // const [c, setC] =  useState("");
  const [cp, setCp] =  useState("");
  const [adrs, setAdrs] =  useState("");
  const [ville, setVille] =  useState("");
  const [tel, setTel] =  useState("");
  const [mail, setMail] =  useState("");
  const [pwd, setPwd] =  useState("");
  const [user, setUser] =  useState();

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', { email: mail, pass: pwd })
      .then(res => { setUser(res.data)
      console.log(user);})
      // navigate('/')
      .catch(err => { setUser("Une erreur est survenue lors de la connexion.", err); }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   {email: mail, pass: pwd, nom: nom, prénom: prénom, codePostal: cp, adresse: adrs, ville: ville, telephone: tel,
    //     numero_Cmd: Math.floor(Math.random() * 10000000),
    //     ligneCommande: panier.map(item => ({
    //       idArticle:      item.id,
    //       qte_Ligne_Cmd:  item.quantity,
    //       prixTotal:      item.prix_Total
    //     }))}
    // )

    axios.post("http://localhost:8081/addCommande",{
          nom: nom, prénom: prénom, codePostal: cp, adresse: adrs, ville: ville, telephone: tel, email: mail,
          numero_Cmd: Math.floor(Math.random() * 10000000),
          ligneCommande: panier.map(item => ({
            idArticle:      item.id,
            qte_Ligne_Cmd:  item.quantity,
            prixTotal:      item.prix_Total
          }))
        }
      )
      .then(
        res => { console.log(res.data)
        toast.success(res.data.message) })
      .catch ( error => { console.log("Erreur lors de l'envoi des données :", error); })
  };


  return (
  <div className="page-wrapper">

    <Header  data={data} pn={panier} />

    <main className="main checkout">
      {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb shop-breadcrumb bb-no">
              <li><Link to="/panier">Votre Panier</Link></li>
              <li className="active"><Link to=""> vérifier</Link></li>
              <li><a href="order.html"> Commande terminée</a></li>
            </ul>
          </div>
        </nav>
      {/* End of Breadcrumb */}
      {/* Start of PageContent */}
      <div className="page-content">

      

        <div className="container">
          <div className="login-toggle">
            <span style={{display: 'none'}}>{selectedRegion}</span><br />
            Client déjà inscrit? <Link to="#" className="show-login font-weight-bold text-uppercase text-dark">Se connecter</Link>
          </div>
          <form className="login-content" onSubmit={handleLogin}>
            <p>Si vous avez déjà effectué des achats chez nous, veuillez saisir vos coordonnées ci-dessous.
            Si vous êtes un nouveau client, veuillez passer à la section Facturation.</p>
            <div className="row">
              <div className="col-xs-6">
                <div className="form-group">
                  <label>email *</label>
                  <input type="text" className="form-control form-control-md" onChange={e => setMail(e.target.value)} name="name" required />
                </div>
              </div>
              <div className="col-xs-6">
                <div className="form-group">
                  <label>Mot de pass *</label>
                  <input type="text" className="form-control form-control-md" onChange={e => setPwd(e.target.value)} name="password" required />
                </div>
              </div>
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" className="custom-checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="mb-0 lh-2">Remember me</label>
              <Link to=""  className="ml-3">Last your password?</Link>
            </div>
            <button className="btn btn-rounded btn-login">Login</button>
          </form>
          <div className="coupon-toggle">
          Avoir un coupon? <Link to="#" className="show-coupon font-weight-bold text-uppercase text-dark">Entez votre code</Link>
          </div>
          <div className="coupon-content mb-4">
            <p>Si vous avez un code promo, veuillez l'appliquer ci-dessous.</p>
            <div className="input-wrapper-inline">
              <input type="text" name="coupon_code" className="form-control form-control-md mr-1 mb-2" placeholder="Coupon code" id="coupon_code" />
              <button type="submit" className="btn button btn-rounded btn-coupon mb-2" name="apply_coupon" value="Apply coupon">Appliquer le coupon</button>
            </div>
          </div>

          <ToastContainer/>
          <form className="form checkout-form" onSubmit={handleSubmit}>
            <div className="row mb-9">
              <div className="col-lg-7 pr-lg-4 mb-4">
                <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                Détails de facturation</h3>
                <div className="row gutter-sm">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label>Prénom *</label>
                      <input type="text" className="form-control form-control-md" onChange={e => setPrénom(e.target.value)} name="firstname" required />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label>Nom *</label>
                      <input type="text" className="form-control form-control-md" onChange={e => setNom(e.target.value)} name="lastname" required />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Addresse *</label>
                  <input type="text" className="form-control form-control-md mb-2" onChange={e => setAdrs(e.target.value)} name="street-address-1" required />
                </div>
                <div className="row gutter-sm">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Region *</label>
                      <div className="select-box">
                        <select name="country" className="form-control form-control-md" onChange={handleRegionChange}>
                          <option value="default" selected="selected">Region</option>
                          {data.regions.map(r => {
                              return (
                              <option key={r.idRegion} value={r.idRegion}>{r.nomRegion}</option>
                            )})
                          }
                        </select>
                      </div>
                    </div>
                      <div className="form-group">
                        <label>Code postal *</label>
                        <input type="text" className="form-control form-control-md" onChange={e => setCp(e.target.value)} name="zip" required />
                      </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ville *</label>
                      <div className="select-box">
                        <select name="country" className="form-control form-control-md" disabled={filteredVilles.length === 0} onChange={e => setVille(e.target.value)}>
                          <option value="default" selected="selected">Ville</option>
                          {filteredVilles.map(r => {
                              return (
                              <option key={r.idVille} value={r.idVille}>{r.nomVille}</option>
                            )})
                          }
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Téléphone *</label>
                      <input type="text" className="form-control form-control-md" onChange={e => setTel(e.target.value)} name="phone" required />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-7">
                  <label>E-mail *</label>
                  <input type="email" className="form-control form-control-md" name="email" onChange={e => setMail(e.target.value)} required />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="order-notes">Notes de commande (optional)</label>
                  <textarea className="form-control mb-0" id="order-notes" name="order-notes" cols={30} rows={4} placeholder="Remarques sur votre commande, par exemple des remarques spéciales pour la livraison" defaultValue={""} />
                </div>
              </div>
              <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                <div className="order-summary-wrapper sticky-sidebar">
                  <h3 className="title text-uppercase ls-10">votre commande</h3>
                  <div className="order-summary">
                    <table className="order-table">
                      <thead>
                        <tr>
                          <th colSpan={2}>
                            <b>Produit</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {panier.map((p,i) => {
                            return (
                              <tr className="bb-no" key={i}>
                                <td className="product-name">{p.nom} <i className="fas fa-times" /> <span className="product-quantity">{p.quantity}</span></td>
                                <td className="product-total">{p.prix_Total} DH</td>
                              </tr>
                            )
                          })
                        }
                        <tr className="cart-subtotal bb-no">
                          <td>
                            <b>Total générale</b>
                          </td>
                          <td>
                            <b>{totalGeneral + livraison()} DH</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="payment-methods" id="payment_method">
                      <h4 className="title font-weight-bold ls-25 pb-0 mb-1">Méthodes de paiement </h4>
                      <div className="accordion payment-accordion">
                        <div className="card">
                          <div className="card-header">
                            <a href="#cash-on-delivery" className="collapse">Virement bancaire direct</a>
                          </div>
                          <div id="cash-on-delivery" className="card-body expanded">
                            <p className="mb-0">
                            Effectuez votre paiement directement sur notre compte bancaire.
                            Veuillez utiliser votre numéro de commande comme référence de paiement.
                            Votre commande ne sera pas expédiée tant que les fonds n'auront pas été crédités sur notre compte.
                            </p>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <a href="#payment" className="expand">vérifier les paiements</a>
                          </div>
                          <div id="payment" className="card-body collapsed">
                            <p className="mb-0">
                            Veuillez envoyer un chèque au nom du magasin, à la rue du magasin, à la ville du magasin, à l'état/comté du magasin et au code postal du magasin.
                            </p>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <a href="#delivery" className="expand">paiement à la livraison</a>
                          </div>
                          <div id="delivery" className="card-body collapsed">
                            <p className="mb-0">
                            Payer en espèces à la livraison.
                            </p>
                          </div>
                        </div>
                        <div className="card p-relative">
                          <div className="card-header">
                            <a href="#paypal" className="expand">Paypal</a>
                          </div>
                          <div id="paypal" className="card-body collapsed">
                            <p className="mb-0">
                            Payer via PayPal, vous pouvez payer avec votre carte de crédit si vous n'avez pas de compte PayPal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group place-order pt-6">
                      <button type="submit" className="btn btn-dark btn-block btn-rounded">passer commande</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End of PageContent */}
    </main>
    
    <Footer/>
  </div>
  )
}