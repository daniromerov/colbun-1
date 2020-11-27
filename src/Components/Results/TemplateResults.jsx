import React, { Fragment } from "react";
import PrincipalLogo from "../Logo";
import MultipleSelect from "./FilterResults";
import FilterResults from "./FilterResults";
import ResultsCases from "./Results";
import TextResult from "./TextResult";

const TemplateResults = () => {
  return (
    <Fragment>
      <PrincipalLogo />
      <TextResult />
      <FilterResults />
      <ResultsCases />
     
     
    </Fragment>
  );
};

export default TemplateResults;

