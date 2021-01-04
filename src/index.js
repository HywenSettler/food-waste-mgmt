import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

axios.defaults.baseURL = 'https://food-mgmt-api.herokuapp.com/';

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
  axios
    .post('https://www.example.com/auth/token/refresh')
    .then((tokenRefreshResponse) => {
      localStorage.setItem('token', tokenRefreshResponse.data.token);
      failedRequest.response.config.headers['Authorization'] =
        'Bearer ' + tokenRefreshResponse.data.token;
      return Promise.resolve();
    });

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axios, refreshAuthLogic);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
