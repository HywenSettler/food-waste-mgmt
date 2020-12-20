import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest}>
      {isLoggedIn ? <Component /> : <Redirect to="/unauthorized" />}
    </Route>
  );
};

export default ProtectedRoute;
