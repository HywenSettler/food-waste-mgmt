import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberUser, setRememberUser] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
        window.utils.isLoggedIn(true);

        window.utils.setAccessToken(access_token);
        window.utils.setRefreshToken(refresh_token);

        window.utils.createAuthInterceptor(axios);

        window.utils.setOrgName(orgName);
        window.utils.isNGO(isNGO);

        history.push('/dashboard');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setError('Invalid credentials provided.');
        setLoading(false);
      });
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
      <small className="form-text text-danger">{error}</small>
      <button type="submit" className="btn btn-success btn-lg btn-block">
        {!isLoading ? (
          'Login'
        ) : (
          <div class="spinner-border text-light" role="status"></div>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
