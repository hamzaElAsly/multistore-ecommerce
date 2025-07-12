import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

export default function Favorie( {data, panier, fav, addPn, Tc} ){

  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const Listefavorie = fav.map((f,i) => {
    return (
      <tr key={i}>
            <td className="product-thumbnail">
              <div className="p-relative">
                <a href="product-default.html">
                  <figure className="figure-img">
                    <img src={f.image} alt={f.nom} width={300} height={338} />
                  </figure>
                </a>
                <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
              </div>
            </td>
            <td className="product-name">
              <a href="product-default.html">{f.nom}</a>
            </td>
            <td className="product-price">
              <ins className="new-price">{f.prix_TVAC} DH</ins>
            </td>
            <td className="product-stock-status">
              <span className="wishlist-in-stock">En Stock</span>
            </td>
            <td className="wishlist-action">
              <div className="d-lg-flex">
                <button className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Afficher détails</button>
                <button className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"  onClick={() => addPn(f)} >Ajouter à panier</button>
                {/* <Button onClick={handleOpen}>Show backdrop</Button>
                <Backdrop
                  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                  open={open}
                  onClick={handleClose}>
                  <CircularProgress color="inherit" />
                </Backdrop> */}
              </div>
            </td>
          </tr>
    )})


  return (
<div class="page-wrapper">
<Header data={data} pn={panier}/>

<main class="main wishlist-page">
  {/* Start of Breadcrumb */}
  <nav className="breadcrumb-nav mb-10">
    <div className="container">
      <ul className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li>Wishlist</li>
      </ul>
    </div>
  </nav>
  {/* End of Breadcrumb */}

  {/* Start of PageContent */}
  <div className="page-content">
    <div className="container">
      <h2 className="wishlist-title">Ma liste de produits souhaits</h2>
      <table className="shop-table wishlist-table">
        <thead>
          <tr>
            <th className="product-name"><span>Product</span></th>
            <th />
            <th className="product-price"><span>Price</span></th>
            <th className="product-stock-status"><span>Stock Status</span></th>
            <th className="wishlist-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Listefavorie}
          {/* <tr>
            <td className="product-thumbnail">
              <div className="p-relative">
                <a href="product-default.html">
                  <figure>
                    <img src="assets/images/shop/7-1.jpg" alt="product" width={300} height={338} />
                  </figure>
                </a>
                <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
              </div>
            </td>
            <td className="product-name">
              <a href="product-default.html">
                Blue Sky Trunk
              </a>
            </td>
            <td className="product-price">
              <ins className="new-price">$85.00</ins>
            </td>
            <td className="product-stock-status">
              <span className="wishlist-in-stock">In Stock</span>
            </td>
            <td className="wishlist-action">
              <div className="d-lg-flex">
                <a href="google.com" className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Quick
                  View</a>
                <a href="google.com" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                  cart</a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="product-thumbnail">
              <div className="p-relative">
                <a href="product-default.html">
                  <figure>
                    <img src="assets/images/shop/19-1.jpg" alt="product" width={300} height={338} />
                  </figure>
                </a>
                <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
              </div>
            </td>
            <td className="product-name">
              <a href="product-default.html">Handmade Ring</a>
            </td>
            <td className="product-price"><ins className="new-price">$5.00</ins></td>
            <td className="product-stock-status">
              <span className="wishlist-in-stock">In Stock</span>
            </td>
            <td className="wishlist-action">
              <div className="d-lg-flex">
                <a href="google.com" className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Quick
                  View</a>
                <a href="google.com" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                  cart</a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="product-thumbnail">
              <div className="p-relative">
                <a href="product-default.html">
                  <figure>
                    <img src="assets/images/shop/20.jpg" alt="product" width={300} height={338} />
                  </figure>
                </a>
                <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
              </div>
            </td>
            <td className="product-name">
              <a href="product-default.html">
                Pencil Case
              </a>
            </td>
            <td className="product-price"><ins className="new-price">$54.00</ins></td>
            <td className="product-stock-status">
              <span className="wishlist-in-stock">In Stock</span>
            </td>
            <td className="wishlist-action">
              <div className="d-lg-flex">
                <a href="google.com" className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Quick
                  View</a>
                <a href="google.com" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                  cart</a>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  </div>
  
  {/* Scroll Top */}
  <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up" /> 
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <circle id="progress-indicator" fill="transparent" stroke="#000000" strokeMiterlimit={10} cx={35} cy={35} r={34} style={{strokeDasharray: '16.4198, 400'}} />
      </svg> 
    </a>
    
</main>
<Footer/>
</div>
  )
}