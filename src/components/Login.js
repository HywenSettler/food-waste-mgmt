import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 mt-5">
          <form className="border border-success rounded p-5">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your E-mail"
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
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
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
        </div>
      </div>
    </div>
  );
}

export default Login;
