import React from "react";

import HeaderComponent from "../../components/header/HeaderComponent";
import "./css/headerContainerStyle.css";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerPosition">
        <HeaderComponent />
      </div>
    );
  }
}

export default HeaderContainer;
