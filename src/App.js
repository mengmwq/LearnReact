import React from "react";
import logo from "./logo.svg";
import Home from "./views/Home";
import About from "./views/About";
import News from "./views/News";
import "./App.css";
import { Switch, Route, HashRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={News} path="/News"></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
