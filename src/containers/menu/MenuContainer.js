import React from "react";

import MenuComponent from "../../components/menu/MenuComponent.js";
import LogoComponent from "../../components/logo/LogoComponent.js";

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LogoComponent />
        <MenuComponent />
      </div>
    );
  }
}

export default MenuContainer;
