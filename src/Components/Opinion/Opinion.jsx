import React, { Fragment } from "react";
import Coments from "./Coments";
import Filter from "./Filter";
//import TableCase from "./TableCase";
import WallComents from "./WallComents";
import SearcherOpinion from "./SearcherOpinion";

import NavBar from "../Menu/Menu";
import logo from "../../img/logo.png";

const Opinion = () => {
  return (
    <Fragment>
       <header className="header-desktop">
            <NavBar></NavBar>
            <div className="logo">              
                <img src={logo} />              
            </div>
            <div className="section__content section__content--p30">
              <div className="container-fluid">
                <div className="header-wrap">
                 
              
                </div>
              </div>
            </div>
          </header>

     
      <WallComents />
      <Coments />
      <Filter />
      <SearcherOpinion />
     
    </Fragment>
  );
};

export default Opinion;
