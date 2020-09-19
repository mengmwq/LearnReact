import React from "react";

import Login from "./views/login/index.js";


import { Switch, Route, HashRouter } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
       
        <HashRouter>
          <Switch>
            <Route component={Login} exact path="/">
            
            </Route>
            
             
          
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
