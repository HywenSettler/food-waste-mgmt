import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

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

const App = ({ isLoggedIn }) => {
  return (
    <div className="container-fluid px-0">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={AboutUs} />
          {/* <ProtectedRoute
            path="/create-menu"
            exact
            component={MessCreateMenu}
            isLoggedIn={isLoggedIn}
          /> */}
          <Route path="/create-menu" exact component={MessCreateMenu} />
          <Route path="/donate" exact component={MessFoodDonate} />
          <Route path="/contact" exact component={ContactUs} />
          <ProtectedRoute
            path="/dashboard"
            exact
            component={Dashboard}
            isLoggedIn={isLoggedIn}
          />
          <Route path="/history" exact component={History} />
          <Route path="/menu" exact component={MenuDisplay} />
          <Route path="/unauthorized" exact component={Unauthorized} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
