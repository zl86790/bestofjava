import React from "react";
import "./css/menuCardComponentStyle.css";
import { Link } from "react-router-dom";

const MenuCardComponent = props => {
  if (props.topic) {
    return (
      <div className="menuCard">
        <Link to={props.link + "/" + props.topic} activeClassName="active">
          {props.label}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="menuCard">
        <Link to={props.link} activeClassName="active">
          {props.label}
        </Link>
      </div>
    );
  }
};
export default MenuCardComponent;
