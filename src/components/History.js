import React from "react";

import "./History.css";

const History = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand" href="#"></a>
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
              <a
                className="nav-link text-white anchor-item"
                href="HomePage.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item mr-3">
              <div className="pt-2">
                <span
                  className="mr-3 font-weight-bolder"
                  style={{ fontSize: "20px" }}
                >
                  Swoobat
                </span>
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  v
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="outside-div d-flex justify-content-around">
        <div className="card text-center" style={{ width: "50%" }}>
          <div className="card-header"></div>
          <div className="card-body">
            <div className="container">
              <div className="row" style={{ height: "20%" }}>
                <div className="col-3">
                  <img
                    src="assets/images/children-sitting.jpg"
                    style={{ height: "100px", width: "100px" }}
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
                    height: "100%",
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
    </div>
  );
};

export default History;
