import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import MessCreateMenu from "./MessCreateMenu";
import MessFoodDonate from "./MessFoodDonate";
import ContactUs from "./ContactUs";

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signup" exact component={SignIn} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/messcm" exact component={MessCreateMenu} />
              <Route path="/messfd" exact component={MessFoodDonate} />
              <Route path="/contact" exact component={ContactUs} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
