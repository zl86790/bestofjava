import React from "react";
import "./css/menuCardComponentStyle.css";
import { Link } from "react-router-dom";

const MenuCardComponent = props => {
  return (
    <div className="menuCard">
      <Link
        to={props.link}
        activeClassName="activeMenu"
        activeStyle={{ color: "green" }}
      >
        {props.label}
      </Link>
    </div>
  );
};
export default MenuCardComponent;
