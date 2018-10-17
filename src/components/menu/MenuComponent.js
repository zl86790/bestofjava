import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  return (
    <div className="bojLeftMenu">
      <nav>
        <MenuCard
          label="Home"
          link="/"
          d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"
          menuStyle="menuCard oneStyle"
        />
        <MenuCard
          label="Activiti"
          link="/topic/activiti"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Lucene"
          link="/topic/lucene"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Mybatis"
          link="/topic/mybatis"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Maven"
          link="/topic/maven"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Rabbitmq"
          link="/topic/rabbitmq"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Redis"
          link="/topic/redis"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Rest"
          link="/topic/rest"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Spring"
          link="/topic/spring"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
      </nav>
    </div>
  );
};
export default MenuComponent;
