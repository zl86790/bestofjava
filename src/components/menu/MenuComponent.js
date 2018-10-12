import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  return (
    <div className="bojLeftMenu">
      <MenuCard label="HOME" />
      <MenuCard label="HOME" />
      <MenuCard label="HOME" />
    </div>
  );
};
export default MenuComponent;
