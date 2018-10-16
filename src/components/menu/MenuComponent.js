import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  return (
    <div className="bojLeftMenu">
      <MenuCard label="Home" link="/" />
      <MenuCard label="Activiti" link="/topic" topic="activiti" />
      <MenuCard label="Lucene" link="/topic" topic="lucene" />
      <MenuCard label="Mybatis" link="/topic" topic="mybatis" />
      <MenuCard label="Maven" link="/topic" topic="maven" />
      <MenuCard label="Rabbitmq" link="/topic" topic="rabbitmq" />
      <MenuCard label="Redis" link="/topic" topic="redis" />
      <MenuCard label="Rest" link="/topic" topic="rest" />
      <MenuCard label="Spring" link="/topic" topic="spring" />
    </div>
  );
};
export default MenuComponent;
