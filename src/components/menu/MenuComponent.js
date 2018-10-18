import React from "react";
import "./css/bojLeftMenu.css";
import MenuCard from "./menuCard/MenuCardComponent";

const MenuComponent = props => {
  const twoMenuIcon =
    "M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z";
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
          label="Java"
          link="/java"
          d={twoMenuIcon}
          menuStyle="menuCard oneStyle"
        />
        <MenuCard
          label="Activiti"
          link="/java/activiti"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Lucene"
          link="/java/lucene"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Mybatis"
          link="/java/mybatis"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Maven"
          link="/java/maven"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Rabbitmq"
          link="/java/rabbitmq"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Redis"
          link="/java/redis"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Rest"
          link="/java/rest"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Spring"
          link="/java/spring"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />

        <MenuCard
          label="Javascript"
          link="/javascript"
          d={twoMenuIcon}
          menuStyle="menuCard oneStyle"
        />
        <MenuCard
          label="JQuery"
          link="/javascript/jquery"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="React"
          link="/javascript/react"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Vue"
          link="/javascript/vue"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />

        <MenuCard
          label="Python"
          link="/python"
          d={twoMenuIcon}
          menuStyle="menuCard oneStyle"
        />
        <MenuCard
          label="Django"
          link="/python/django"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
        <MenuCard
          label="Diesel"
          link="/python/diesel"
          d="M0 14l6-6-6-6v12z"
          menuStyle="menuCard twoStyle"
        />
      </nav>
    </div>
  );
};
export default MenuComponent;
