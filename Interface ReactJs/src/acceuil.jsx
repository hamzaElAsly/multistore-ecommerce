import { Link } from "react-router-dom";
import Header from "./header";

export default function Acceuil ( {data, addPn, addFav, Tc, panier, user} ){

  return (
  <div className="page-wrapper">
    <Header data={data} pn={panier} user={user} />
    <div className="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6" data-swiper-options="{
                  'slidesPerView': 1,
                  'loop': false,
                  'breakpoints': {'576': { 'slidesPerView': 2},
                                  '768': { 'slidesPerView': 3},
                                  '1200':{ 'slidesPerView': 4}} }">
      <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1" style={{display:'flex', justifyContent:'space-around'}}>
        <div className="swiper-slide icon-box icon-box-side icon-box-primary">
          <span className="icon-box-icon icon-shipping">
            <i className="w-icon-truck" />
          </span>
          <div className="icon-box-content">
            <h4 className="icon-box-title font-weight-bold mb-1">LIVRAISON GRATUITMENT</h4>
            <p className="text-default">Pour toutes les commandes supérieur à 1000 Dh</p>
          </div>
        </div>
        <div className="swiper-slide icon-box icon-box-side icon-box-primary">
          <span className="icon-box-icon icon-payment">
            <i className="w-icon-bag" />
          </span>
          <div className="icon-box-content">
            <h4 className="icon-box-title font-weight-bold mb-1">Paiement sécurisé</h4>
            <p className="text-default">Garetissons un paiement sécurisé</p>
          </div>
        </div>
        <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
          <span className="icon-box-icon icon-chat">
            <i className="w-icon-chat" />
          </span>
          <div className="icon-box-content">
            <h4 className="icon-box-title font-weight-bold mb-1">Services clients appelez-nous ou</h4>
            <p className="text-default">Envoyez-nous ou e-mail us 24/7</p>
          </div>
        </div>
      </div>
    </div>

    {/* Listes des Categories */}
    <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate mt-5">
        <h2 className="title justify-content-center pt-1 ls-normal mb-5">Tout les Categories</h2>
        <div className="swiper">
          <div className="swiper-container swiper-theme pg-show" data-swiper-options="{
            'spaceBetween': 20,
            'slidesPerView': 2,
            'breakpoints': {
              '576': { 'slidesPerView': 3 },
              '768': { 'slidesPerView': 5 },
              '992': { 'slidesPerView': 6 }}}">
            <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
              {/* <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                <a href="shop-banner-sidebar.html" className="category-media">
                  <img src="assets/images/demos/demo1/categories/2-1.jpg" alt="Category" width={130} height={130} />
                </a>
                <div className="category-content">
                  <h4 className="category-name">Vêtement</h4>
                  <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Acheter Maintenant</a>
                </div>
              </div>
              <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                <a href="shop-banner-sidebar.html" className="category-media">
                  <img src="assets/images/demos/demo1/categories/2-6.jpg" alt="Category" width={130} height={130} />
                </a>
                <div className="category-content">
                  <h4 className="category-name">Électronique</h4>
                  <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Acheter Maintenant</a>
                </div>
              </div> */}
              {data.categories.map((cat,i)=>{
                return <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs" key={i}>
                        <a href="shop-banner-sidebar.html" className="category-media">
                          <img className="imageCat" src={cat.image} alt={cat.nomCat} width={130} height={130} />
                        </a>
                        <div className="category-content">
                          <h4 className="category-name"> {cat.nomCat} </h4>
                          <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Acheter Maintenant</a>
                        </div>
                      </div>
              })}
            </div>
          </div>
        </div>
    </section>

    {/* Liste des produits */}
        <div className="tab-content product-wrapper appear-animate mt-5 bg-light">
          <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate">Liste des produits </h2>
          <Tc />
          <div className="tab-pane active pt-4" id="tab1-1">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              {data.articles.map((art,i)=>{
                return  <div className="product-wrap" key={i}>
                      <div className="product text-center">
                        <figure className="product-media" width={380} height={380}>
                          <Link to="">
                            <img src={art.image} alt={art.nom} />
                          </Link>
                          <div className="product-action-vertical">
                            <div className="btn-product-icon btn-cart w-icon-cart" title="Ajouter à panier"  onClick={() => addPn(art)}></div>
                            <div className="btn-product-icon btn-wishlist w-icon-heart" title="Favorie" onClick={() => addFav(art)}></div>
                            <div className="btn-product-icon btn-quickview w-icon-search" title="Rechercher"></div>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name"><a href="product-default.html">{art.nom}</a></h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "60%" }}></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                          </div>
                          <div className="product-price">
                            <ins className="new-price">{art.prix_TVAC} DH</ins>
                          </div>
                        </div>
                      </div>
                    </div>
              })}
            </div>
          </div>
        </div>
      {/* </div> */}
    {/* </section> */}

    {/* Scroll Top */}
    <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up" /> 
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <circle id="progress-indicator" fill="transparent" stroke="#000000" strokeMiterlimit={10} cx={35} cy={35} r={34} style={{strokeDasharray: '16.4198, 400'}} />
      </svg> 
    </a>
    
  </div>
  );
}

