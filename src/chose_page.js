import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import Webapp from "./webapp";

class Chose_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Webapp}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Login" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Chose_page;
