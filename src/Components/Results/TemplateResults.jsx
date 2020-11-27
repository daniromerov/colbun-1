import React, { Fragment } from "react";
import PrincipalLogo from "../Logo";
import FilterResults from "./FilterResults";
import ResultsCases from "./Results";





const TemplateResults = () => {
  return (
    <Fragment>
      <PrincipalLogo />
      <FilterResults />
      <ResultsCases />
     
     
    </Fragment>
  );
};

export default TemplateResults;

