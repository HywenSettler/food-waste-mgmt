import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import Login from "./Login";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import MessCreateMenu from "./MessCreateMenu";
import MessFoodDonate from "./MessFoodDonate";

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signup" exact component={SignIn} />
              <Route path="/login" exact component={Login} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/messcm" exact component={MessCreateMenu} />
              <Route path="/messfd" exact component={MessFoodDonate} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
