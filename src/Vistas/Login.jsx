import React from 'react';
import logoCol from '../img/logo-colbun.jpg';
import logoFen from '../img/logo-fenix.png';
import './Login.css'
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { auth } from '../firebase'

function Login () {

	const provider = new firebase.auth.OAuthProvider('microsoft.com');
	provider.addScope('User.Read');
  
	const microsoftLogin = (prov) => firebase.auth().signInWithPopup(prov).then(function(result) {
		//localStorage.setItem('token', result.credential.accessToken);
		console.log(result.credential.accessToken);
	  })
		.catch(function(error) {
		  console.log(error);
		});


  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
			
				<form className="login100-form validate-form">
				<div className="logos" align="center"><img src={logoCol} width="100"/> <img src={logoFen} width="100"/></div>
					<span className="login100-form-title p-b-34">
						Iniciar sesión
					</span>
					
					<div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="first-name" className="input100" type="text" name="username" placeholder="Correo" />
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input className="input100" type="password" name="pass" placeholder="Contraseña" />
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						
					<button className="login100-form-btn">
					<Link to="/home">	Iniciar sesión </Link>
						</button>
					</div>

					<div className="login-form-btn">
						<button className="login-gmail" onClick={() => microsoftLogin(provider)}>
							Ingresar con outlook
						</button>
					</div>

					<div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Olvidé
						</span>

						<a href="#" className="txt2">
						mi contraseña
						</a>
					</div>

					<div className="w-full text-center">
						<a href="#" className="txt3">
							Registrarme
						</a>
					</div>
				</form>

				<div className="login100-more">				
			</div>
		</div>
	</div>
	</div>
	
  );
}

export default Login;
