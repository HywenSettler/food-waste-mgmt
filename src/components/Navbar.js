import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import LoginModal from "./LoginModal";

import "./Navbar.css";

export class Navbar extends Component {
  state = { loginModalShow: false };

  loginModalClose = () => {
    this.setState({ loginModalShow: false });
  };

  render() {
    return (
      <Fragment>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            clasnsName="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item linkitem-home">
                <Link className="nav-link text-white anchor-item" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Nav.Link
                  className="nav-link text-white anchor-item"
                  onClick={() => this.setState({ loginModalShow: true })}
                >
                  Log In
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white anchor-item" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <LoginModal
          show={this.state.loginModalShow}
          onHide={this.loginModalClose}
        />
      </Fragment>
    );
  }
}

export default Navbar;
