import React from "react";
import "./css/bodyCss.css";
import Banner from "./banner/Banner";

const BodyComponent = props => {
  return (
    <div className="row no-gutter">
      <div className="main col-md-1 col-md-offset-2">
        <Banner />
      </div>
    </div>
  );
};
export default BodyComponent;
