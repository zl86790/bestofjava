import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  return (
    <div className="bojLeftMenu">
      <nav>
        <MenuCard label="Home" link="/" />
        <MenuCard label="Activiti" link="/topic/activiti" />
        <MenuCard label="Lucene" link="/topic/lucene" />
        <MenuCard label="Mybatis" link="/topic/mybatis" />
        <MenuCard label="Maven" link="/topic/maven" />
        <MenuCard label="Rabbitmq" link="/topic/rabbitmq" />
        <MenuCard label="Redis" link="/topic/redis" />
        <MenuCard label="Rest" link="/topic/rest" />
        <MenuCard label="Spring" link="/topic/spring" />
      </nav>
    </div>
  );
};
export default MenuComponent;
