import React from "react";
import "./css/menuCardComponentStyle.css";
import { Link } from "react-router-dom";

const MenuCardComponent = props => {
  return (
    <div className="menuCard">
      <Link to={{ pathname: props.link, state: { topic: props.topic } }}>
        {props.label}
      </Link>
    </div>
  );
};
export default MenuCardComponent;
