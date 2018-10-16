import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  return (
    <div className="bojLeftMenu">
      <MenuCard label="Home" link="/" topic="mybatis" />
      <MenuCard label="Spring" link="/spring" topic="mybatis" />
      <MenuCard label="Maven" link="/maven" topic="mybatis" />
      <MenuCard label="Mybatis" link="/mybatis" topic="mybatis" />
    </div>
  );
};
export default MenuComponent;
