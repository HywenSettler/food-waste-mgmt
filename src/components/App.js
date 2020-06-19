import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import Login from "./Login";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
// import MessMenuForm from './MessMenuForm'
// import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <BrowserRouter>
          {/* <Header /> */}
          <div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signup" exact component={SignIn} />
              <Route path="/login" exact component={Login} />
              <Route path="/about" exact component={AboutUs} />
              {/* <Route path="/menu" exact component={MessMenuForm} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
