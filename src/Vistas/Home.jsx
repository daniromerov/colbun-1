import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../img/logo.png";
import edit from '../img/Home/edit.png';
import add from '../img/Home/add.png';
import avatar from '../img/Home/avatar-01.png';
import search from '../img/Home/mdi_search.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
//Components 
import NavBar from '../Components/Menu/Menu';


function Home () { 

    return (
           
<section className="animsition">
    <div className="page-wrapper">       
        <div className="page-container">   
               <NavBar></NavBar>
            <header className="header-desktop">
                <div className="logo"> 
                <Link to="/"> <img src={logo} /></Link>             
                    
            </div>
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Buscar.." />
                                <button className="au-btn--submit" type="submit">
                                    <img src={search}/>
                                </button>
                            </form>
                            <div className="header-button">

                                <div className="account-wrap">
                                    <div className="account-item">
                                        <div className="image">
                                            <img src={avatar} />
                                        </div>
                                        <div className="content">
                                            john doe
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>           
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h1 className="title-1"> Inicio </h1>
                                </div>
                            </div>
                        </div>             
                        <div className="row-casos">                        
                            <div className="col-lg-12">
                            <h3 className="title-4"> Ultimos casos </h3>
                                <div className="au-card recent-report">
                                    <div className="au-card-inner">                                    
                                        <h3 className="title-5">Permisos ambientales para proyecto de desaladora</h3>
                                       <div className="Icons"> <img src={edit} />  <img src={add} /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            </header></div></div></section>
    );
}

export default Home;