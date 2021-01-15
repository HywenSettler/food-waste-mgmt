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
              <div className="row" style={{ height: '20%' }}>
                {history.map(({ donor, food }) => (
                  <>
                    <div className="col-3">
                      <img
                        src={food.image_url}
                        style={{ height: '100px', width: '100px' }}
                        alt=""
                      />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center column-style-div">
                      {food.name}
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                      {food.quantity}
                    </div>
                  </>
                ))}
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
