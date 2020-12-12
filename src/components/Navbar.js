import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import LoginForm from "./LoginForm";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

        <div clasnsName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item linkitem-home">
              <Link className="nav-link text-white anchor-item" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Nav.Link
                className="nav-link text-white anchor-item"
                onClick={() => setIsOpen(true)}
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
      <Modal
        show={isOpen}
        size="lg"
        onHide={() => setIsOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <LoginForm
            functionToCallAfterFormSubmitToCloseModal={() => setIsOpen(false)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
