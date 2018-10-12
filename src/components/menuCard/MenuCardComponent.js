import React from "react";
import "./css/menuCardComponentStyle.css";

const MenuCardComponent = props => {
  return <div className="menuCard">{props.label}</div>;
};
export default MenuCardComponent;
