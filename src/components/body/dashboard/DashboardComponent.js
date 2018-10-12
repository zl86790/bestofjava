import React from "react";
import CardComponent from "./CardComponent";
import "./css/dashboardStyle.css";

const DashboardComponent = props => {
  return (
    <div>
      <div className="dashboardTitleStyle">
        <div className="sc-kgoBCf fxLSbU">
          <span className="mega-octicon octicon-flame flameColor" />
        </div>
        Today hot projects
      </div>
      <div>
        <CardComponent title="Walt" />
        <CardComponent title="30 seconds of code" />
        <CardComponent title="Test" />
      </div>
    </div>
  );
};
export default DashboardComponent;
