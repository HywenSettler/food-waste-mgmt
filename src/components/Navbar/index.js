import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

import './Navbar.css';

const Navbar = ({ isLoggedIn, orgName }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item linkitem-home">
              <Link
                className="nav-link text-white anchor-item"
                to={isLoggedIn ? '/dashboard' : '/'}
              >
                {isLoggedIn ? orgName : 'Home'}
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item mr-3">
                <Nav.Link
                  className="nav-link text-white anchor-item"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Log In
                </Nav.Link>
              </li>
            )}
            <li className="nav-item">
              <Nav.Link
                className="nav-link text-white anchor-item"
                onClick={() => setIsRegisterOpen(true)}
              >
                {isLoggedIn ? 'Log Out' : 'Register'}
              </Nav.Link>
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        show={isLoginOpen}
        size="lg"
        onHide={() => setIsLoginOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
      <Modal
        show={isRegisterOpen}
        size="lg"
        onHide={() => setIsRegisterOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    orgName: state.auth.orgName
  };
};

export default connect(mapStateToProps)(Navbar);
