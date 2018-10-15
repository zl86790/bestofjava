import React from "react";
import "./css/bodyCss.css";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import DashboardComponent from "./dashboard/DashboardComponent";

const BodyComponent = props => {
  return (
    <div className="row no-gutter">
      <div className="main col-md-8 offset-2">
        <Banner />
        <DashboardComponent data={props.data} />
        <Footer />
      </div>
    </div>
  );
};
export default BodyComponent;
