import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import MessCreateMenu from "./MessCreateMenu";
import MessFoodDonate from "./MessFoodDonate";
import ContactUs from "./ContactUs";
import DashboardMess from "./DashboardMess";
import DashboardNGO from "./DashboardNGO";
import History from "./History";

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/create-menu" exact component={MessCreateMenu} />
              <Route path="/donate" exact component={MessFoodDonate} />
              <Route path="/contact" exact component={ContactUs} />
              <Route path="/dashboard" exact component={DashboardMess} />
              <Route path="/history" exact component={History} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
