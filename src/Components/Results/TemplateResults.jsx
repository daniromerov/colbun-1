import React, { Fragment } from "react";
import PrincipalLogo from "../Logo";
import MultipleSelect from "./FilterResults";
import FilterResults from "./FilterResults";
import ResultsCases from "./Results";
import TextResult from "./TextResult";

import NavBar from "../Menu/Menu";
import logo from "../../img/logo.png";

const TemplateResults = () => {
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

     
      <TextResult />
      <FilterResults />
      <ResultsCases />
     
     
    </Fragment>
  );
};

export default TemplateResults;

