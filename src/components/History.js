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
        <div className="card text-center" style={{ width: '60%' }}>
          <div className="card-header"></div>
          {history.length === 0 ? (
            <h1
              style={{
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              No History :(
            </h1>
          ) : (
            <div
              className="card-body"
              style={{ overflow: 'auto', height: '800px' }}
            >
              <div className="container">
                {history.map(({ id, donor, food }) => (
                  <div
                    className="row"
                    key={id}
                    style={{ height: '20%', margin: '5px 0px' }}
                  >
                    <div className="col-2">
                      <img
                        src={food.image_url}
                        style={{ height: '100px', width: '100px' }}
                        alt=""
                      />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center column-style-div">
                      {donor.orgName}
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                      {food.name}
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                      <strong>{food.quantity}</strong> servings
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
