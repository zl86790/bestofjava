import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeaderContainer from "./containers/header/HeaderContainer";
import MenuContainer from "./containers/menu/MenuContainer";
import BodyContainer from "./containers/body/BodyContainer";
import SpringBodyContainer from "./containers/body/SpringBodyContainer";
import MavenBodyContainer from "./containers/body/MavenBodyContainer";
import TopicBodyContainer from "./containers/body/TopicBodyContainer";
import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="row no-gutter">
        <div className="col-md-2">
          <MenuContainer />
        </div>
        <div className="col-md-10">
          <div className="row no-gutter">
            <header className="col-md-12">
              <HeaderContainer />
            </header>
          </div>
          <div className="row no-gutter">
            <div className="col-md-12 bojBody">
              <Switch>
                <Route exact path="/" component={BodyContainer} />
                <Route path="/topic/:topic" component={TopicBodyContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
