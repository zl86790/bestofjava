import React from "react";
import "./css/bodyCss.css";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import DashboardComponent from "./dashboard/DashboardComponent";

const BodyComponent = props => {
  return <DashboardComponent data={props.data} />;
};
export default BodyComponent;
