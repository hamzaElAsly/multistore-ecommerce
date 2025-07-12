import React from 'react'
import { Link } from "react-router-dom";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css'; // Exemple : Thème sombre violet
import 'primereact/resources/themes/md-light-indigo/theme.css'; // Exemple : Thème Material Design
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Thème (choisissez celui qui vous convient)
import 'primereact/resources/primereact.min.css';  // Styles de base de PrimeReact
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css'; // Icônes de PrimeReact
// import Footer from "./footer";

export default function Profil ({data ,panier, user}) {

  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
      <>
          <Divider />
          <p className="mt-2">Suggestions</p>
          <ul className="pl-2 ml-2 mt-0 line-height-3">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
          </ul>
      </>
  );

  const listeVents = () => {
    return data.commandes.map((c, i) => {
      const lignesCommande = data.ligne_commandes.filter(lc => lc.idCommande === c.id_Commande);
      return (
        <React.Fragment key={i}>
          <tr>
            <td colSpan={2}>Numéro de commande</td>
            <td colSpan={4}># {c.numero_Cmd}</td>
          </tr>
          {lignesCommande.map((lc, index) => {
            const article = data.articles.find(a => a.id_Article === lc.idArticle);
            return (
              <tr key={index}>
                <td className="order-id">
                  <div className="p-relative">
                    <div>
                      <figure className="figure-img">
                        <img src={article.image} alt={article.nom} width={300} height={338} />
                      </figure>
                    </div>
                  </div>
                </td>
                <td className="product-name" width={200}>
                  <a href="product-default.html">{article.nom}</a>
                </td>
                <td className="order-date">{new Date(lc.created_at).toLocaleDateString('fr-FR')}</td>
                <td className="order-status">Complet</td>
                <td className="order-total">
                  <span className="order-price">{lc.prixTotal} DH</span> pour
                  <span className="order-quantity"> {lc.qte_Ligne_Cmd}</span> article(s)
                </td>
                <td className="order-action">
                  <Link to="#" className="btn btn-outline btn-default btn-block btn-sm btn-rounded">Voir</Link>
                </td>
              </tr>
            );
          })}
        </React.Fragment>
      );
    })
  }


  return (
  <div className="page-wrapper">

    <Header data={data} pn={panier} user={user} />

    {/* Start of Main */}
    <main className="main">
      {/* Start of Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Mon Profil</h1>
        </div>
      </div>
      {/* End of Page Header */}
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li><a href="demo1.html">Accueil</a></li>
            <li>Mon Compte</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}

      {/* Start of PageContent */}
        <div className="page-content pt-2">
          <div className="tab tab-vertical row gutter-lg">
            <ul className="nav nav-tabs mb-6" role="tablist">
              <li className="nav-item">
                <a href="#account-dashboard" className="nav-link active">Tableau de bord</a>
              </li>
              <li className="nav-item">
                <a href="#account-orders" className="nav-link">Commandes</a>
              </li>
              <li className="nav-item">
                <a href="#account-downloads" className="nav-link">Téléchargements</a>
              </li>
              <li className="nav-item">
                <a href="#account-addresses" className="nav-link">Adresses</a>
              </li>
              <li className="nav-item">
                <a href="#account-details" className="nav-link">détails</a>
              </li>
              <li className="nav-item">
                <Link to="/favorie">Favories</Link>
              </li>
              <li className="nav-item">
                <Link to="/Connection">Déconnection</Link>
              </li>
            </ul>
            { user && user.nom ?
            <div className="tab-content mb-6">
              {/* __________ Tabble de board */}
              <div className="tab-pane active in" id="account-dashboard">
                <p className="greeting">
                  Bonjour
                  <span className="text-dark font-weight-bold"> {user.nom} {user.prenom} </span>
                  (si tu n'es pas 
                  <span className="text-dark font-weight-bold"> {user.prenom} </span>?
                  <Link to="/Connection" className="text-primary"> Se déconnecter</Link>)
                </p> 
                <p className="mb-4">
                  Depuis le tableau de bord de votre compte, vous pouvez consulter votre <a href="#account-orders" className="text-primary link-to-tab">commandes récentes</a>,
                  gérez votre <a href="#account-addresses" className="text-primary link-to-tab">
                  shipping Et adresses de facturation</a>, Et 
                  <a href="#account-details" className="text-primary link-to-tab"> modifiez votre mot de passe et les détails de votre compte.
                  </a>
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-orders" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-orders">
                          <i className="w-icon-orders" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Commandes</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-downloads" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-download">
                          <i className="w-icon-download" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Téléchargement</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-addresses" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-address">
                          <i className="w-icon-map-marker" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Adresses</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-details" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-account">
                          <i className="w-icon-user" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Détails</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <Link to="/favorie" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-wishlist">
                          <i className="w-icon-heart" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Favories</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <Link to="/Connection">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-logout">
                          <i className="w-icon-logout" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Déconnection</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* __________ Commandes */}
              <div className="tab-pane mb-4" id="account-orders">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-orders">
                    <i className="w-icon-orders" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title text-capitalize ls-normal mb-0">Les commandes</h4>
                  </div>
                </div>
                    <table className="table table-hover shop-table account-orders-table mb-6">
                      <thead>
                        <tr align="center">
                          <th colSpan={2} className="order-id">Article</th>
                          <th className="order-date">Date</th>
                          <th className="order-status">Status</th>
                          <th className="order-total">Total</th>
                          <th className="order-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listeVents()}
                      </tbody>
                    </table>
                    <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Aller à la boutique<i className="w-icon-long-arrow-right" /></a>
              </div>
              {/* __________ Téléchargement */}
              <div className="tab-pane" id="account-downloads">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-downloads mr-2">
                    <i className="w-icon-download" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title ls-normal">Téléchargement</h4>
                  </div>
                </div>
                <p className="mb-4">Aucun téléchargement disponible pour le moment.</p>
                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Aller à la boutique <i className="w-icon-long-arrow-right" /></a>
              </div>
                {/* __________ Adresses */}
              <div className="tab-pane" id="account-addresses">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-map-marker">
                    <i className="w-icon-map-marker" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title mb-0 ls-normal">Addresses</h4>
                  </div>
                </div>
                <p>Les adresses suivantes seront utilisées par défaut sur la page de paiement.</p>
                <div className="row">
                  <div className="col-sm-6 mb-6">
                    <div className="ecommerce-address billing-address pr-lg-8">
                      <h4 className="title title-underline ls-25 font-weight-bold">Adresse de facturation</h4>
                      <address className="mb-4">
                        <table className="address-table">
                          <tbody>
                            <tr>
                              <th>Nom : </th>
                              <td>{user.nom}</td>
                            </tr>
                            <tr>
                              <th>Prénom : </th>
                              <td>{user.prenom}</td>
                            </tr>
                            <tr>
                              <th>Date de nissance : </th>
                              <td>{new Date(user.dateN).toLocaleDateString('fr-FR')}</td>
                            </tr>
                            <tr>
                              <th>Adresse:</th>
                              <td>{user.adresse}</td>
                            </tr>
                            <tr>
                              <th>Ville : </th>
                              <td>{user.ville}</td>
                            </tr>
                            <tr>
                              <th>Code postale : </th>
                              <td>{user.codePostal}</td>
                            </tr>
                            <tr>
                              <th>Téléphone : </th>
                              <td>{user.telephone}</td>
                            </tr>
                          </tbody>
                        </table>
                      </address>
                      <Link to="#" className="btn btn-link btn-underline btn-icon-right text-primary">Modifiez votre adresse de facturation<i className="w-icon-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-6">
                    <div className="ecommerce-address shipping-address pr-lg-8">
                      <h4 className="title title-underline ls-25 font-weight-bold">adresse de livraison</h4>
                      <address className="mb-4">
                        <table className="address-table">
                          <tbody>
                            <tr>
                              <th>Nom : </th>
                              <td>{user.nom} {user.prenom}</td>
                            </tr>
                            <tr>
                              <th>Adresse : </th>
                              <td>{user.adresse}</td>
                            </tr>
                            <tr>
                              <th>Ville : </th>
                              <td>{user.ville}</td>
                            </tr>
                            <tr>
                              <th>Pays : </th>
                              <td>Maroc (MAR)</td>
                            </tr>
                            <tr>
                              <th>Code Postalee :</th>
                              <td>{user.codePostal}</td>
                            </tr>
                          </tbody>
                        </table>
                      </address>
                      <Link to="#" className="btn btn-link btn-underline btn-icon-right text-primary"> Modifier <i className="w-icon-long-arrow-right" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* __________ Déails de compte */}
              <div className="tab-pane" id="account-details">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-account mr-2">
                    <i className="w-icon-user" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title mb-0 ls-normal">Détails du compte</h4>
                  </div>
                </div>
                <form className="form account-details-form" action="#" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstname">Prénom *</label>
                        <input type="text" id="firstname" name="firstname" placeholder="John" className="form-control form-control-md" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastname">Nom *</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Doe" className="form-control form-control-md" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-6">
                    <label htmlFor="email_1">Email *</label>
                    <input type="email" id="email_1" name="email_1" className="form-control form-control-md" />
                  </div>
                  <h4 className="title title-password ls-25 font-weight-bold">changer votre mot de pass </h4>
                  <div className="form-group">
                    <label className="text-dark" htmlFor="cur-password">Mot de passe actuel laissez vide pour le laisser inchangé</label>
                    <input type="password" className="form-control form-control-md" id="cur-password" name="cur_password" />
                  </div>
                  <div className="form-group">
                    <label className="text-dark" htmlFor="new-password">Nouveau mot de passe, laissez vide pour le laisser inchangé</label>
                    <input type="password" className="form-control form-control-md" id="new-password" name="new_password" />
                  </div>
                  <div className="form-group">
                    <label className="text-dark" htmlFor="new-pass">Exemple de Mot De Pass PRIME REACT</label> <br />
                    <Password className="text-dark" header={header} footer={footer} id="new-pass" toggleMask/>
                  </div>
                  <div className="form-group mb-10">
                    <label className="text-dark" htmlFor="conf-password">Confirmée votre mot de pass</label>
                    <input type="password" className="form-control form-control-md" id="conf-password" name="conf_password" />
                  </div>
                  <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4">Enregistrer les modifications</button>
                </form>
              </div>
            </div> 
            :
            <div className="tab-content mb-6">
              {/* __________ Tabble de board */}
              <div className="tab-pane active in" id="account-dashboard">
                <p className="greeting">
                  Bonjour
                  <span className="text-dark font-weight-bold">, </span>
                  (si vous n'avez pas encore enregistré(e) votre cmopte ?
                  <Link to="/Connection" className="text-primary"> Se connecter</Link>)
                </p> 
                <p className="mb-4">
                  Depuis le tableau de bord de votre compte, vous pouvez consulter votre <a href="#account-orders" className="text-primary link-to-tab">commandes récentes</a>,
                  gérez votre <a href="#account-addresses" className="text-primary link-to-tab">
                  shipping Et adresses de facturation</a>, Et 
                  <a href="#account-details" className="text-primary link-to-tab"> modifiez votre mot de passe et les détails de votre compte.
                  </a>
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-orders" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-orders">
                          <i className="w-icon-orders" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Commandes</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-downloads" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-download">
                          <i className="w-icon-download" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Téléchargement</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-addresses" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-address">
                          <i className="w-icon-map-marker" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Adresses</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <a href="#account-details" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-account">
                          <i className="w-icon-user" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Détails</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <Link to="/favorie" className="link-to-tab">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-wishlist">
                          <i className="w-icon-heart" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Favories</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                    <Link to="/Connection">
                      <div className="icon-box text-center">
                        <span className="icon-box-icon icon-logout">
                          <i className="w-icon-logout" />
                        </span>
                        <div className="icon-box-content">
                          <p className="text-uppercase mb-0">Déconnection</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* __________ Commandes */}
              <div className="tab-pane mb-4" id="account-orders">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-orders">
                    <i className="w-icon-orders" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title text-capitalize ls-normal mb-0">Les commandes</h4>
                  </div>
                </div>
                <p className="greeting">
                  Bonjour
                  <span className="text-dark font-weight-bold">, </span>
                  (si vous n'avez pas encore enregistré(e) votre cmopte ?
                  <Link to="/Connection" className="text-primary"> Se connecter</Link>)
                </p> 
                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Aller à la boutique<i className="w-icon-long-arrow-right" /></a>
              </div>
              {/* __________ Téléchargement */}
              <div className="tab-pane" id="account-downloads">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-downloads mr-2">
                    <i className="w-icon-download" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title ls-normal">Téléchargement</h4>
                  </div>
                </div>
                <p className="mb-4">Aucun téléchargement disponible pour le moment.</p>
                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Aller à la boutique <i className="w-icon-long-arrow-right" /></a>
              </div>
                {/* __________ Adresses */}
              <div className="tab-pane" id="account-addresses">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-map-marker">
                    <i className="w-icon-map-marker" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title mb-0 ls-normal">Addresses</h4>
                  </div>
                </div>
                <p className="greeting">
                  Bonjour
                  <span className="text-dark font-weight-bold">, </span>
                  (si vous n'avez pas encore enregistré(e) votre cmopte ?
                  <Link to="/Connection" className="text-primary"> Se connecter</Link>)
                </p> 
              </div>
              {/* __________ Déyails de compte */}
              <div className="tab-pane" id="account-details">
                <div className="icon-box icon-box-side icon-box-light">
                  <span className="icon-box-icon icon-account mr-2">
                    <i className="w-icon-user" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title mb-0 ls-normal">Détails du compte</h4>
                  </div>
                </div>
                <p className="greeting">
                  Bonjour
                  <span className="text-dark font-weight-bold">, </span>
                  (si vous n'avez pas encore enregistré(e) votre cmopte ?
                  <Link to="/Connection" className="text-primary"> Se connecter</Link>)
                </p> 
              </div>
            </div>
            }
          </div>
        </div>
      {/* End of PageContent */}
    </main> 
    {/* End of Main */}
    
    {/* <Footer/> */}
  </div>
  )
}