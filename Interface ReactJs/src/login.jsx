import axios from "axios";
import { useState } from "react"
// import Cookies from "cookie-universal";
import { Link } from "react-router-dom";
// import Header from "./header";

// import { useNavigate } from "react-router-dom";

// const cookie = Cookies();

export default function Login( { handleLogin, mail, pwd, setMail, setPwd, us } ){

  // const navigate = useNavigate();

  const [prénom, setPrénom] =  useState("");
  const [nom, setNom] =  useState("");
  const [dn, setDn] =  useState("");
  const [c, setC] =  useState("");
  const [cp, setCp] =  useState("");
  const [adrs, setAdrs] =  useState("");
  const [ville, setVille] =  useState("");
  const [tel, setTel] =  useState("");
  const [email, setEmail] =  useState("");
  const [password, setPass] =  useState("");
  const [user, setUser] =  useState(null);

  // useEffect(() => {
  //     const userClient = cookie.get('user') || [];
  //     setUser(userClient);
  // }, []);

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:8081/login', { email: mail, pass: pwd })
  //     .then(res => { 
  //       setUser(res.data)
  //       cookie.set('User', user.user, { path: '/', maxAge: 60 * 60 * 24 * 60 });
  //       console.log(user);
  //       // window.location.pathname('/')
  //       })
  //     .catch(err => { setUser("Une erreur est survenue lors de la connexion.", err); }
  //   );
  // };

  const handleRegistre = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/inscrire', { email: email, pass: password, nom: nom, prénom: prénom, date: dn, civ: c, codeP: cp, adresse: adrs, ville: ville, tel: tel })
      .then(res => { console.log(res.data)
      // navigate('/panier')
      })
      .catch(err => { setUser("Une erreur est survenue lors de la connexion.", err); }
    );
  };
  
return (
  <>
  <div className="login-popup">
    <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
        <ul className="nav nav-tabs text-uppercase" role="tablist">
          <li className="nav-item">
            <a href="#sign-in" className="nav-link active">Sign In</a>
          </li>
          <li className="nav-item">
            <a href="#sign-up" className="nav-link">Sign Up</a>
          </li>
        </ul>
        <div className="tab-content">
          <form className="tab-pane active" id="sign-in" onSubmit={handleLogin}>
              <div className="form-group">
                <label>adresse email <span style={{color:'red'}}>*</span></label>
                <input type="email"    className="form-control" value={mail} onChange={e => setMail(e.target.value)} name="username" id="username"  />{/*  */}
              </div>
              <div className="form-group mb-0">
                <label>Password <span style={{color:'red'}}>*</span></label>
                <input type="password" className="form-control" value={pwd} onChange={e => setPwd(e.target.value)} name="password" id="password"  />{/*  */}
              </div>
              <>
                {us && us.message && (
                  <div className="alert alert-icon alert-error alert-bg alert-inline">
                    <h4 className="alert-title"> <i className="w-icon-times-circle"></i> Oh snap! </h4>
                    {'   '} {us.message}
                  </div>
                )}
              </>
              <div className="form-checkbox d-flex align-items-center justify-content-between">
                <a href="https://google.com/">Last your password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>

          <form  className="tab-pane" id="sign-up" onSubmit={handleRegistre}>
            <div className="form-group">
              <label>Prénom</label> <input type="text" onChange={e => setPrénom(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group">
              <label>Nom</label> <input type="text" onChange={e => setNom(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group">
              <label>Date naissance</label> <input type="date" onChange={e => setDn(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group">
              <label>Civilité</label> <input type="text" onChange={e => setC(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group mb-5">
              <label>Adresse</label> <input type="text" onChange={e => setAdrs(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group mb-5">
              <label>Code Postale</label> <input type="text" onChange={e => setCp(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group mb-5">
              <label>Ville</label> <input type="text" onChange={e => setVille(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group mb-5">
              <label>Téléphone</label> <input type="text" onChange={e => setTel(e.target.value)}  className="form-control" required />              
            </div>
            <div className="form-group mb-5">
              <label>Adresse email</label> <input type="text" onChange={e => setEmail(e.target.value)}  className="form-control" required />
            </div>
            <div className="form-group mb-5">
              <label>Mot de pass</label> <input type="text" onChange={e => setPass(e.target.value)}  className="form-control" required />
            </div>
            <p>Vos données personnelles seront utilisées pour soutenir votre expérience sur ce site Web, 
              pour gérer l'accès à votre compte et à d'autres fins décrites dans notre 
              <a href="https://google.com/" className="text-primary"> politique de confidentialité{user}</a>.
            </p>
            <a href="https://google.com/" className="d-block mb-5 text-primary">Inscrivez-vous en tant que vendeur ?</a>
            <button type="submit" className="btn btn-primary">S'inscrire</button>
          </form>
        </div>
        <p className="text-center">Connectez-vous avec votre compte social</p>
        <div className="social-icons social-icon-border-color d-flex justify-content-center">
            <Link to="#" className="social-icon social-facebook w-icon-facebook" ></Link>
            <Link to="#" className="social-icon social-twitter w-icon-twitter" ></Link>
            <Link to="#" className="social-icon social-google w-icon-google" ></Link>
        </div>
    </div>
  </div>
  </>
)
}