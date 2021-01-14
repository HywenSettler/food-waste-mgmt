import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Unauthorized from './Unauthorized';
import Homepage from './HomePage';
import AboutUs from './AboutUs';
import MessCreateMenu from './MessCreateMenu';
import MessFoodDonate from './MessFoodDonate';
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import History from './History';
import MenuDisplay from './MenuDisplay';

const App = () => {
  return (
    <div className="container-fluid px-0">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={AboutUs} />
          <ProtectedRoute
            path="/create-menu"
            exact
            component={MessCreateMenu}
          />
          <ProtectedRoute path="/donate" exact component={MessFoodDonate} />
          <Route path="/contact" exact component={ContactUs} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/history" exact component={History} />
          <ProtectedRoute path="/menu" exact component={MenuDisplay} />
          <Route path="/unauthorized" exact component={Unauthorized} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
