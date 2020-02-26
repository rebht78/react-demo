import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import LoginFormHOC from "./LoginForm";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginFormHOC />
          </Route>
          <Route exact path="/dashboard">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
