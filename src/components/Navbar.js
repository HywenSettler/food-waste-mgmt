import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item linkitem-home">
              <Link className="nav-link text-white anchor-item" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link text-white anchor-item" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white anchor-item" to="/signup">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
