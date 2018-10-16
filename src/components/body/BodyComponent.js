import React from "react";
import "./css/bodyCss.css";
import DashboardComponent from "./dashboard/DashboardComponent";

const BodyComponent = props => {
  return (
    <DashboardComponent
      data={props.data}
      topic={props.topic}
      display={props.display}
    />
  );
};
export default BodyComponent;
