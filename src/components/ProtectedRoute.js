import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest}>
      {window.utils.ifLoggedIn() ? (
        <Component />
      ) : (
        <Redirect to="/unauthorized" />
      )}
    </Route>
  );
};

export default ProtectedRoute;
