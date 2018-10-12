import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeaderContainer from "./containers/header/HeaderContainer";
import MenuContainer from "./containers/menu/MenuContainer";
import BodyContainer from "./containers/body/bodyContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <MenuContainer />
        </div>
        <header className="App-header ">
          <HeaderContainer />
        </header>
        <div className="row">
          <div className="col-center-block col-md-8 col-md-offset-8">
            <div>
              <BodyContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
