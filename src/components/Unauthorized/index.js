import React from 'react';
import { Link } from 'react-router-dom';

import './Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div className="container">
      <div className="gandalf">
        <div className="fireball"></div>
        <div className="skirt"></div>
        <div className="sleeves"></div>
        <div className="shoulders">
          <div className="hand left"></div>
          <div className="hand right"></div>
        </div>
        <div className="head">
          <div className="hair"></div>
          <div className="beard"></div>
        </div>
      </div>
      <div className="message">
        <h1>401 - You Shall Not Pass</h1>
        <p>
          Uh oh, Gandalf is blocking the way!
          <br />
          Please log in to view this page.
        </p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default Unauthorized;
