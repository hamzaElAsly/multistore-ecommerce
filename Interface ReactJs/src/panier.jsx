import Header from "./header"
import { Link } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./footer";

export default function Panier({data, panier, suppPn, Tc, update}){

  const detailArt=(i)=>{
    console.log(i)
    return (
    <div className="product product-single product-popup">
      <div className="row gutter-lg">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="product-gallery product-gallery-sticky mb-0">
            <div className="product-single-swiper swiper-container swiper-theme nav-inner row cols-1 gutter-no">
              <figure className="product-image">
                <img src="assets/images/products/popup/1-440x494.jpg" data-zoom-image="assets/images/products/popup/1-800x900.jpg" alt="Water Boil Black Utensil" width={800} height={900} />
              </figure>
            </div>
            <div className="product-thumbs-wrap">
              <div className="product-thumbs">
                <div className="product-thumb active">
                  <img src="assets/images/products/popup/1-103x116.jpg" alt="Product Thumb" width={103} height={116} />
                </div>
              </div>
              <button className="thumb-up disabled"><i className="w-icon-angle-left" /></button>
              <button className="thumb-down disabled"><i className="w-icon-angle-right" /></button>
            </div>
          </div>
        </div>
        <div className="col-md-6 overflow-hidden p-relative">
          <div className="product-details scrollable pl-0">
            <h2 className="product-title">Electronics Black Wrist Watch</h2>
            <div className="product-bm-wrapper">
              <figure className="brand">
                <img src="assets/images/products/brand/brand-1.jpg" alt="Brand" width={102} height={48} />
              </figure>
              <div className="product-meta">
                <div className="product-categories">
                  Category:
                  <span className="product-category"><a href="https://www.google.com/">Electronics</a></span>
                </div>
                <div className="product-sku">
                  SKU: <span>MS46891340</span>
                </div>
              </div>
            </div>
            <hr className="product-divider" />
            <div className="product-price">$40.00</div>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{width: '80%'}} />
                <span className="tooltiptext tooltip-top" />
              </div>
              <a href="https://www.google.com/" className="rating-reviews">(3 Reviews)</a>
            </div>
            <div className="product-short-desc">
              <ul className="list-type-check list-style-none">
                <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
              </ul>
            </div>
            <hr className="product-divider" />
            <div className="product-form product-variation-form product-color-swatch product-variations">
              <label>Color:</label>
              <div className="d-flex align-items-center">
                {/* <a href="https://www.google.com/" className="color" style={{backgroundColor: '#ffcc01'}} />
                <a href="https://www.google.com/" className="color" style={{backgroundColor: '#ca6d00'}} />
                <a href="https://www.google.com/" className="color" style={{backgroundColor: '#1c93cb'}} />
                <a href="https://www.google.com/" className="color" style={{backgroundColor: '#ccc'}} />
                <a href="https://www.google.com/" className="color" style={{backgroundColor: '#333'}} /> */}
              </div>
            </div>
            <div className="product-form product-variation-form product-size-swatch product-variations">
              <label>Size:</label>
              <div className="flex-wrap d-flex align-items-center">
                <a href="https://www.google.com/" className="size">Small</a>
                <a href="https://www.google.com/" className="size">Medium</a>
                <a href="https://www.google.com/" className="size">Large</a>
                <a href="https://www.google.com/" className="size">Extra Large</a>
              </div>
            </div>
            <div className="product-variation-price">
              <span />
            </div>
            <div className="product-form">
              <div className="product-qty-form">
                <div className="input-group">
                  <input className="quantity form-control" type="number" min={1} max={1000} />
                  <button className="quantity-plus w-icon-plus" />
                  <button className="quantity-minus w-icon-minus" />
                </div>
              </div>
              <button className="btn btn-primary btn-cart">
                <i className="w-icon-cart" />
                <span>Add to Cart</span>
              </button>
            </div>
            <div className="social-links-wrapper">
              <div className="social-links">
                <div className="social-icons social-no-color border-thin">
                  {/* <a href="https://www.google.com/" className="social-icon social-facebook w-icon-facebook" />
                  <a href="https://www.google.com/" className="social-icon social-twitter w-icon-twitter" />
                  <a href="https://www.google.com/" className="social-icon social-instagram w-icon-instagram" />
                  <a href="https://www.google.com/" className="social-icon social-youtube w-icon-youtube" />
                  <a href="https://www.google.com/" className="social-icon social-pinterest w-icon-pinterest" /> */}
                </div>
              </div>
              <span className="divider d-xs-show" />
              <div className="product-link-wrapper d-flex">
                <a href="https://www.google.com/" className="btn-product-icon btn-wishlist w-icon-heart"><span /></a>
                <a href="https://www.google.com/" className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  
  const livraison =()=>{ return totalGeneral <= 1000 ? 25 : 0 }
  const totalGeneral = panier.reduce((acc, p) => acc + p.prix_Total, 0);
  const listePanier = Array.isArray(panier) && panier.length > 0 ? (
    panier.map((p,i) => {
    return (
      <tr key={i}>
                        <td className="product-thumbnail">
                        <div className="d-none"></div>
                          <div className="p-relative">
                            <div>
                              <figure className="figure-img">
                                <img src={p.image} alt={p.nom} width={300} height={338} onClick={() => detailArt(p.id)} />
                              </figure>
                            </div>
                            <button type="submit" className="btn btn-close"><i className="fas fa-times" onClick={() => suppPn(p)} /></button>
                          </div>
                        </td>
                        <td className="product-name">
                          <a href="product-default.html">{p.nom}</a>
                        </td>
                        <td className="product-price"><span className="amount">{p.prix_TVAC} DH</span></td>
                        <td className="product-quantity">
                          <div className="input-group">
                            <input className="quantity form-control" type="number" value={p.quantity} /> 
                            {/* min={min} max={max} onChange={handleChange}  */}
                            <button className="quantity-plus w-icon-plus" />  {/* onClick={increment}  */}
                            <button className="quantity-minus w-icon-minus"/> {/* onClick={decrement}  */}
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">{p.prix_Total} DH</span>
                        </td>
      </tr>
      )
    }) 
  ) : (
      <tr>
        <td colSpan="5" align="center">Votre panier est vide</td>
      </tr>
  );

  return (
<div className="page-wrapper">
  <Header data={data} pn={panier}/>
  {/* Start of Main */}
  <main className="main cart">
    {/* Start of Breadcrumb */}
    <nav className="breadcrumb-nav">
      <div className="container">
        <ul className="breadcrumb shop-breadcrumb bb-no">
          <li className="active"><a href="cart.html">Votre Panier</a></li>
          <li><Link to="/caisse">   vérifier</Link></li>
          <li><a href="order.html"> Commande terminée</a></li>
        </ul>
      </div>
    </nav>
    {/* End of Breadcrumb */}
    {/* Start of PageContent  */}
    <div className="page-content">
      <Tc/>
      {/* <div className="container"> */}
        <div className="row gutter-lg mb-10">
          <div className="col-lg-8 pr-lg-4 mb-6">
            <table className="shop-table cart-table">
              <thead>
                <tr>
                  <th className="product-name"><span>Produit</span></th>
                  <th />
                  <th className="product-price"><span>Prix</span></th>
                  <th className="product-quantity"><span>Quantité</span></th>
                  <th className="product-subtotal"><span>Total</span></th>
                </tr>
              </thead>
              <tbody>
                {listePanier}
                <tr>
                  <td colSpan="5" align="center">
                    <div className="cart-action mb-6">
                    <Link to="/" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"><i className="w-icon-long-arrow-left" />Continue Shopping</Link>
                    <button type="submit" className="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart" onClick={() => suppPn()} >Clear Cart</button>{/*  {panier.length === 0 ? disabled : ''}  */}
                    <button type="submit" className="btn btn-rounded btn-update" name="update_cart" value="Update Cart" onClick={() => update()} disabled={panier.length === 0} >Update Cart</button>
                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 sticky-sidebar-wrapper">
            <div className="sticky-sidebar">
              <div className="cart-summary mb-4">
                <h3 className="cart-title text-uppercase">Total du votre panier</h3>
                <div className="cart-subtotal d-flex align-items-center justify-content-between">
                  <label className="ls-25">Total générale</label>
                  <span>{totalGeneral} Dh</span>
                </div>
                <hr className="divider" />
                <div className="cart-subtotal d-flex align-items-center justify-content-between">
                  <label className="ls-25">Frais de livraison</label>
                  <span>{livraison()} Dh</span>
                </div>
                <hr className="divider" />
                <div className="cart-subtotal d-flex align-items-center justify-content-between">
                  <span align='center'><i className="w-icon-truck"></i> Livraison gratuit à partir de 1000 dhs </span>
                </div>
                <hr className="divider mb-6" />
                <div className="order-total d-flex justify-content-between align-items-center">
                  <label>Total à payer</label>
                  <span className="ls-50">{totalGeneral + livraison()} Dh</span>
                </div>
                <Link to="/caisse" className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
                Passer à la caisse<i className="w-icon-long-arrow-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    
    {/* Scroll Top */}
    <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up" /> 
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <circle id="progress-indicator" fill="transparent" stroke="#000000" strokeMiterlimit={10} cx={35} cy={35} r={34} style={{strokeDasharray: '16.4198, 400'}} />
      </svg> 
    </a>
    
  </main>
{/* End of Main */}

<Footer/>
</div>)
}