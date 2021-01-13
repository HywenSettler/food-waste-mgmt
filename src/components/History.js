import React from 'react';
import { Link } from 'react-router-dom';

import './History.css';

import Navbar from './Navbar';

const History = () => {
  return (
    <div>
      <Navbar />
      <div className="outside-div d-flex justify-content-around">
        <div className="card text-center" style={{ width: '50%' }}>
          <div className="card-header"></div>
          <div className="card-body">
            <div className="container">
              <div className="row" style={{ height: '20%' }}>
                <div className="col-3">
                  <img
                    src="assets/images/children-sitting.jpg"
                    style={{ height: '100px', width: '100px' }}
                    alt=""
                  />
                </div>
                <div className="col-4 d-flex flex-column justify-content-center column-style-div">
                  Free 100 something
                </div>
                <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                  32MB
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted d-flex flex-row-reverse">
            <Link to="/dashboard" className="btn btn-primary">
              Go to profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
