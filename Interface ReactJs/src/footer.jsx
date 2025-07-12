import { Link } from "react-router-dom";

export default function Footer() {
  
  return (
  <footer className="footer appear-animate" data-animation-options="{ 'name': 'fadeIn' }">

    <div className="footer-newsletter bg-primary">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="icon-box icon-box-side text-white">
              <div className="icon-box-icon d-inline-flex">
                <i className="w-icon-envelop3" />
              </div>
              <div className="icon-box-content">
                <h4 className="icon-box-title text-white text-uppercase font-weight-bold">Abonnez-vous à notre Newsletter </h4>
                <p className="text-white">Obtenez toutes les dernières informations sur les événements, les ventes et les offres.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
            <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-rounded">
              <input type="email" className="form-control mr-2 bg-white" name="email" id="email" placeholder="Tapez votre E-mail " />
              <button className="btn btn-dark btn-rounded" type="submit">S'abonner<i className="w-icon-long-arrow-right" /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-top">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="widget widget-about">
              <a href="demo1.html" className="logo-footer">
                <img src="assets/images/logo.jpg" alt="logo" width={260} />
              </a>
              <div className="widget-body">
                <p className="widget-about-title">Des questions? Appelez-nous 24 h/24 et 7 j/7.</p>
                <a href="tel:18005707777" className="widget-about-call">(+212)607-080910</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
              <div className="widget-body">
              <h3 className="widget-title">Suivez-nous</h3>
                <p className="widget-about-desc">Inscrivez-vous maintenant pour recevoir des mises à jour sur les coupons &amp; pronot get up icons ster now toon.
                </p>
                <div className="social-icons social-icons-colored">
                  <Link to="#" className="social-icon social-facebook w-icon-facebook" />
                  <Link to="#" className="social-icon social-twitter w-icon-twitter" />
                  <Link to="#" className="social-icon social-instagram w-icon-instagram" />
                  <Link to="#" className="social-icon social-youtube w-icon-youtube" />
                  <Link to="#" className="social-icon social-pinterest w-icon-pinterest" />
                </div>
              </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <h3 className="widget-title">Entreprise</h3>
              <ul className="widget-body">
                <li><a href="/qui sommes-nous">Qui sommes nous</a></li>
                <li><Link to="#">L'équipe</Link></li>
                <li><Link href="#">Contactez-nous</Link></li>
                <li><Link to="/profil">Histoire de ventes</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <h4 className="widget-title">Mon profil</h4>
              <ul className="widget-body">
                <li><a href="/profil">Suivre ma commande</a></li>
                <li><a href="/panier">Voir le panier</a></li>
                <li><a href="/Connection">Connection</a></li>
                <li><Link to="#">Help</Link></li>
                <li><a href="/favorie">Mes Favorites</a></li>
                <li><Link to="#">politique de confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <p className="copyright">Copyright © 2025 Store Leek . Tous droits réservés.</p>
        </div>
        <div className="footer-right">
          <span className="payment-label mr-lg-8">Nous utilisons le paiement sécurisé pour</span>
          <figure className="payment">
            <img src="assets/images/payment.png" alt="payment" width={159} height={25} />
          </figure>
        </div>
      </div>
    </div>
  </footer>
  )
}