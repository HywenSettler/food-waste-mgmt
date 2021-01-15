import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './History.css';

import Navbar from './Navbar';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('/history').then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outside-div d-flex justify-content-around">
        <div className="card text-center" style={{ width: '50%' }}>
          <div className="card-header"></div>
          <div className="card-body">
            <div className="container">
              <div className="row" style={{ height: '20%', margin: '5px 0px' }}>
                <div className="col-3">
                  <img
                    src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1608285294/food-waste-mgmt/food-items/breakfast/milk.jpg"
                    style={{ height: '100px', width: '100px' }}
                    alt=""
                  />
                </div>
                <div className="col-4 d-flex flex-column justify-content-center column-style-div">
                  Milk
                </div>
                <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                  4
                </div>
              </div>
              <div className="row" style={{ height: '20%', margin: '5px 0px' }}>
                <div className="col-3">
                  <img
                    src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1608285289/food-waste-mgmt/food-items/breakfast/pav-bhaji.jpg"
                    style={{ height: '100px', width: '100px' }}
                    alt=""
                  />
                </div>
                <div className="col-4 d-flex flex-column justify-content-center column-style-div">
                  Pav Bhaji
                </div>
                <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                  15
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted d-flex flex-row-reverse">
            <Link to="/dashboard" className="btn btn-primary">
              Go to dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
