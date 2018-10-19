import React from "react";

import MenuComponent from "../../components/menu/MenuComponent.js";
import LogoComponent from "../../components/logo/LogoComponent.js";
import "./css/menuStyle.css";

class MenuContainer extends React.Component {
  render() {
    return (
      <div className="leftMenu">
        <LogoComponent />
        <MenuComponent />
      </div>
    );
  }
}

export default MenuContainer;
