import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './components/App';

window.utils = {
  createAuthInterceptor: function (axiosInstance) {
    axiosInstance.interceptors.request.use((request) => {
      request.headers['Authorization'] = `Bearer ${this.getAccessToken()}`;

      return request;
    });
  },
  getOrgName: function () {
    return this.shouldRememberUser()
      ? localStorage.getItem('org_name')
      : sessionStorage.getItem('org_name');
  },
  setOrgName: function (orgName) {
    this.shouldRememberUser()
      ? localStorage.setItem('org_name', orgName)
      : sessionStorage.setItem('org_name', orgName);
  },
  ifNGO: function () {
    return this.shouldRememberUser()
      ? JSON.parse(localStorage.getItem('isNGO'))
      : JSON.parse(sessionStorage.getItem('isNGO'));
  },
  isNGO: function (bool) {
    this.shouldRememberUser()
      ? localStorage.setItem('isNGO', JSON.stringify(bool))
      : sessionStorage.setItem('isNGO', JSON.stringify(bool));
  },
  ifLoggedIn: function () {
    return this.shouldRememberUser()
      ? JSON.parse(localStorage.getItem('is_logged_in'))
      : JSON.parse(sessionStorage.getItem('is_logged_in'));
  },
  isLoggedIn: function (bool) {
    this.shouldRememberUser()
      ? localStorage.setItem('is_logged_in', JSON.stringify(bool))
      : sessionStorage.setItem('is_logged_in', JSON.stringify(bool));
  },
  shouldRememberUser: function () {
    return JSON.parse(localStorage.getItem('remember_user'));
  },
  rememberUser: function (bool) {
    localStorage.setItem('remember_user', JSON.stringify(bool));
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

// axios.defaults.baseURL = 'https://food-mgmt-api.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:5000/';

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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
