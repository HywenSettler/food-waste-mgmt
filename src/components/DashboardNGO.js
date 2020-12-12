import React from "react";

import "./Dashboard.css";

const DashboardNGO = () => {
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
        <span className="welcome-span">
          <span>
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
              className="image-dim"
              alt="..."
            />
          </span>
          <span className="hi-text pl-2">
            Hi!
            <div className="welcome-text">Welcome back</div>
          </span>
          <div className="input-group my-3 ml-5 search-div">
            <input
              type="text"
              className="form-control"
              placeholder="Search Contacts..."
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                Search
              </span>
            </div>
          </div>
          <img
            src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_1.jpg"
            className="graph-div"
            alt="..."
          />
        </span>
        <span className="card-span mt-2">
          <div className="card card-div">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
              className="card-img-top img-size"
              style={{ borderRadius: "20px 20px 0px 0px" }}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <a href="#" className="btn btn-primary ml-4">
                Search Food
              </a>
            </div>
          </div>
          <div className="card mt-5 card-div second-search-div">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
              className="card-img-top img-size"
              style={{ borderRadius: "20px 20px 0px 0px" }}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <a href="#" className="btn btn-primary ml-4">
                Visit your Cart
              </a>
            </div>
          </div>
        </span>
        <span className="mt-3 card-span" style={{ height: "inherit" }}>
          <div className="card side-span-card">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
              className="card-img-top px-2 py-3 rounded-sm"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default DashboardNGO;
