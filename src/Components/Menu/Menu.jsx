import React, { Fragment } from 'react';
import '../Menu/Menu.css';
import  Agregar from '../../../src/images/Agregar.png';
import  Buscar from '../../../src/images/Buscar.png';
import  Home from '../../../src/images/Home.png';

const NavBar = () => {
  return (
    <Fragment>
      <div className="menu">
  
        <nav className="burger-menu">
            <input className="menu-check" type="checkbox" name="menu-check" value="" id="menu-check"/> 
            <label className="menu-open" for="menu-check">
                <span className="burger1"></span>
                <span className="burger2"></span>
                <span className="burger3"></span>
            </label>

            <ul className="menu-options">
                <li><a href="/home"><img src={Home} alt={"Home"}/></a><p>Inicio</p></li>
                <li><a href="/casos"><img src={Agregar} alt={"Agregar"}/></a><p>Nuevo caso</p></li>
                <li><a href="/detallecasos"><img src={Buscar} alt={"Buscar"}/></a><p>Buscar</p></li>
            </ul>
        </nav>
    </div>
    </Fragment>
  );
}
export default NavBar;