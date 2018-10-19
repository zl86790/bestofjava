import React from "react";
import "./css/menuCardComponentStyle.css";
import { Link } from "react-router-dom";

const MenuCardComponent = props => {
  return (
    <div className={props.menuStyle}>
      <div className="row no-gutter">
        <div className="col-md-1" style={{ marginLeft: 20 }}>
          <svg
            width="20"
            height="20"
            className="octicon octicon-home"
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
            fill="rgb(250, 158, 89)"
          >
            <path fillRule="evenodd" d={props.d} />
          </svg>
        </div>
        <div className="col-md-3" style={{ marginTop: 3 }}>
          <Link to={props.link}>{props.label}</Link>
        </div>
      </div>
    </div>
  );
};
export default MenuCardComponent;
