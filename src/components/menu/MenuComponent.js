import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  return (
    <div className="bojLeftMenu">
      <MenuCard label="Home" link="/" />
      <MenuCard label="Spring" link="/topic" topic="spring" />
      <MenuCard label="Maven" link="/topic" topic="maven" />
      <MenuCard label="Mybatis" link="/topic" topic="mybatis" />
    </div>
  );
};
export default MenuComponent;
