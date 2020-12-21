import React from 'react';

import './History.css';

const History = () => {
  return (
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
                />
              </div>
              <div className="col-4 d-flex flex-column justify-content-center column-style-div">
                Free 100 something
              </div>
              <div className="col-3 d-flex flex-column justify-content-center column-style-div">
                32MB
              </div>
              <div
                className="col-1 d-flex flex-column justify-content-center text-right"
                style={{
                  height: '100%'
                }}
              >
                x
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted d-flex flex-row-reverse">
          <a href="#" className="btn btn-primary">
            Go to profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default History;
