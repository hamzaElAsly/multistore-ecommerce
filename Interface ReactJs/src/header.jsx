import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function Header({data, pn, user}) {
  
  const pnCount = () => {
    if (pn.length > 0){
     return ( <span className="cart-count">{pn.length}</span> )
  }}
  const totalGeneral = pn.reduce((acc, p) => acc + p.prix_TVAC * p.quantity, 0);

  return (
<div className='page-wrapper'>
{/* Start of Header */}
  <header className="header">
    {/* End of Header Top */}
    <div className="header-top">
      {/* <div className="container"> */}
        <div className="header-left">
          <p className="welcome-msg">{user && user.prenom  ? <>Bienvenue, {user.prenom} {user.nom} !</> : <>Petit message : ( bienvenu Par exemple )</>} </p>
        </div>
        <div className="header-right main-nav">
          <ul className='menu active-underline'>
            <li>
            <div className="dropdown">
              <a href='#langue' data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="./assets/images/flags/fra.png" alt="ENG Flag" width={17} height={8} className="dropdown-image" />
                {" "} FRA
              </a>
              <div className="dropdown-box">
                <a className="dropdown-item" href="#ENG">
                  <img src="./assets/images/flags/eng.png" alt="ENG Flag" width={17} height={8} className="dropdown-image" />
                  {" "}ENG
                </a>
                <a className="dropdown-item" href="#FRA">
                  <img src="./assets/images/flags/fra.png" alt="FRA Flag" width={17} height={8} className="dropdown-image" />
                  {" "}FRA
                </a>
              </div>
            </div>
            </li>
            <li>
              <a href="blog.html" className="d-lg-show">
                Blog
              </a>
            </li>
            <li><a href="contact-us.html" className="d-lg-show">
                  Contact-nous
                </a></li>
            <li><Link to="/profil" className="d-lg-show">
                  Mon compte
                </Link></li>
            <li><Link  className="d-lg-show login sign-in"to={'/Connection'}>
                  <i className="w-icon-account"></i>Connection / Enregister
                </Link>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </div>
    {/* End of Header Top */}

    {/* Start of Header Middle */}
    <div className="header-middle">
      <div className="container">
        <div className="header-left mr-md-4">
          <a href="/" className="logo ml-lg-0">
            <Link to={'/'} ><img src="assets/images/logo.jpg" alt="logo" width={144} height={45} /></Link>
          </a>
          <form className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
            method="get" action="#">
            <div className="select-box">
              <select id="category" name="categorie">
                <option defaultValue="">All Categories</option>
                {data.categories.map( (c,i) => { return <option key={i} defaultValue={c.idCat}>{c.nomCat}</option> })}
              </select>
            </div>
            <input type="text" className="form-control" name="search" id="search" placeholder="Rechercher dans..." required />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>
        </div>
        
        <div className="header-right ml-4">
          <div className="header-call d-xs-show d-lg-flex align-items-center">
            <a href="https://google.com/"><i className="w-icon-call"></i></a>
            <div className="call-info d-lg-show">
              <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                <a href="/cdn-cgi/l/email-protection#cbe8" className="text-capitalize"> Chat en direct </a> 
                <span style={{color: '#333'}}>ou :</span>
              </h4>
              <a href="tel:#" className="phone-number font-weight-bolder ls-50">(+212)607-080910</a>
            </div>
          </div>
          <Link to="/favorie" className="wishlist label-down link d-xs-show">
            <i className="w-icon-heart"></i>
            <span className="wishlist-label d-lg-show">Favorie</span>
          </Link>
          {/* Panier */}
          <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
            <div className="cart-overlay"></div>
            <Link to="" className="cart-toggle label-down link">
              <i className="w-icon-cart">{pnCount()}</i>
              <span className="cart-label">Panier</span>
            </Link>
            <div className="dropdown-box">
              <div className="cart-header">
                <span>Vos panier</span>
                <Link to="" className="btn-close"> </Link>
              </div>
              {/* Liste des paniers */}
              <div className="products" id="panier">
                {pn.map( (p, i)=>{
                  return (
                <div className="product product-cart" key={i}>
                  <div className="product-detail">
                    <a href="product-default.html" className="product-name">
                    {p.nom}</a>
                    <div className="price-box">
                      <span className="product-quantity">{p.quantity}</span>
                      <span className="product-price">{p.prix_TVAC} DH</span>
                    </div>
                  </div>
                  <figure className="product-media figure-img">
                    <a href="product-default.html">
                      <img src={p.image} alt="product" height={84} width={94} />
                    </a>
                  </figure>
                  <button className="btn btn-link btn-close" aria-label="button">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                )})}
              </div>
              <div className="cart-bottom">
                <div className="cart-total">
                  <label>Total:</label>
                  <span className="price">{totalGeneral} DH</span>
                </div>
                <div className="cart-action">
                  <Link to="/panier" className="btn btn-dark btn-outline btn-rounded">Voir le panier </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Header Middle */}
  </header>
</div>
    )
}