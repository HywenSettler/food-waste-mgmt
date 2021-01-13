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

window.utils = {
  createAuthInterceptor: function (axiosInstance) {
    axiosInstance.interceptors.request.use((request) => {
      request.headers['Authorization'] = `Bearer ${this.getAccessToken()}`;

      return request;
    });
  },
  shouldRememberUser: function () {
    return JSON.parse(localStorage.getItem('remember_user'));
  },
  rememberUser: function (bool) {
    return localStorage.setItem('remember_user', JSON.stringify(bool));
  },
  getAccessToken: function () {
    return this.shouldRememberUser()
      ? localStorage.getItem('access_token')
      : sessionStorage.getItem('access_token');
  },
  getRefreshToken: function () {
    return this.shouldRememberUser()
      ? localStorage.getItem('refresh_token')
      : sessionStorage.getItem('refresh_token');
  },
  setAccessToken: function (access_token) {
    this.shouldRememberUser()
      ? localStorage.setItem('access_token', access_token)
      : sessionStorage.setItem('access_token', access_token);
  },
  setRefreshToken: function (refresh_token) {
    this.shouldRememberUser()
      ? localStorage.setItem('refresh_token', refresh_token)
      : sessionStorage.setItem('refresh_token', refresh_token);
  }
};

axios.defaults.baseURL = 'https://food-mgmt-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:5000/';

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
  axios
    .create({
      baseURL: axios.defaults.baseURL,
      headers: {
        authorization: `Bearer ${window.utils.getRefreshToken()}`
      }
    })
    .post('/refresh')
    .then((tokenRefreshResponse) => {
      window.utils.setAccessToken(tokenRefreshResponse.data.access_token);

      failedRequest.response.config.headers['Authorization'] =
        'Bearer ' + tokenRefreshResponse.data.access_token;

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
