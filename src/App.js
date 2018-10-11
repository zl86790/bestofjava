import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeaderContainer from "./containers/header/HeaderContainer";
import MenuContainer from "./containers/menu/MenuContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <MenuContainer />
        </div>
        <div className="col-center-block col-md-8">
          <header className="App-header ">
            <HeaderContainer />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
