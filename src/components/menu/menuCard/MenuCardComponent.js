import React from "react";
import "./css/menuCardComponentStyle.css";

const MenuCardComponent = props => {
  return (
    <div className="menuCard">
      <a href={props.link}>{props.label}</a>
    </div>
  );
};
export default MenuCardComponent;
