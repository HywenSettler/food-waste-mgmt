import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { logIn } from '../actions';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);

  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/login', { email, password })
      .then((res) => {
        const {
          tokens: { access_token, refresh_token },
          isNGO,
          orgName
        } = res.data;

        // console.log(window.utils);

        window.utils.rememberUser(rememberUser);

        window.utils.setAccessToken(access_token);
        window.utils.setRefreshToken(refresh_token);

        axios.interceptors.request.use((request) => {
          request.headers[
            'Authorization'
          ] = `Bearer ${window.utils.getAccessToken()}`;

          return request;
        });

        props.logIn({ isNGO, orgName });

        history.push('/dashboard');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="border border-success rounded p-5" onSubmit={onFormSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onChange={() => setRememberUser(!rememberUser)}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-success btn-lg btn-block">
        Login
      </button>
    </form>
  );
};

export default connect(null, { logIn })(LoginForm);
