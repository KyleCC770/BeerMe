import React, { Component } from "react";
import Navigation from "./NavigationComponent";
import Home from "./HomeComponent";
import Beer from "./BeerComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/beer" render={() => <Beer />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
