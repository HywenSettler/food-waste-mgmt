import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BarChart from '../BarChart';
import PieChart from '../PieChart';
import Navbar from '../Navbar';
import { data } from '../../FoodData';

import './Dashboard.css';

const Dashboard = () => {
  // false - Pie Chart & true - Bar Chart
  const [chart, setChart] = useState(false);
  const toggleChart = () => {
    setChart(!chart);
  };

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    axios.get('/user').then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  const {
    email = '',
    address = '',
    phoneNumber = '',
    city = '',
    pincode = '',
    profileImageUrl = 'https://res.cloudinary.com/dc2o7coc1/image/upload/v1608568048/food-waste-mgmt/Username.png',
    isMenuCreated = false,
    isNGO = true
  } = userDetails;

  return (
    <div>
      <Navbar />
      <div className="outside-div d-flex justify-content-around">
        <span className="welcome-span">
          <span>
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1608568048/food-waste-mgmt/Username.png"
              className="image-dim"
              alt="..."
            />
          </span>
          <span className="hi-text pl-2">
            Hi!
            <div className="welcome-text">Welcome back</div>
          </span>
          {isNGO && (
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
          )}
          {!isNGO && chart && (
            <Fragment>
              <BarChart fooddata={data} />
              <button
                type="button"
                class="btn btn-primary"
                onClick={toggleChart}
              >
                Show Pie
              </button>
            </Fragment>
          )}
          {!isNGO && !chart && (
            <Fragment>
              <PieChart fooddata={data} />
              <button
                type="button"
                class="btn btn-primary"
                onClick={toggleChart}
              >
                Show Bar
              </button>
            </Fragment>
          )}
        </span>
        <span className="card-span mt-2">
          <div className="card card-div">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1608832162/food-waste-mgmt/menu-image.jpg"
              className="card-img-top img-size"
              style={{ borderRadius: '20px 20px 0px 0px' }}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              {!isMenuCreated ? (
                <Link to="/create-menu" className="btn btn-primary ml-4">
                  Create Your Mess Menu
                </Link>
              ) : (
                <Link to="/menu" className="btn btn-primary ml-4">
                  View Mess Menu
                </Link>
              )}
            </div>
          </div>
          {isMenuCreated && (
            <div className="card mt-5 card-div second-search-div">
              <img
                src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1608832248/food-waste-mgmt/donate-food.jpg"
                className="card-img-top img-size"
                style={{ borderRadius: '20px 20px 0px 0px' }}
                alt="..."
              />
              <div className="card-body d-flex justify-content-center">
                <Link to="/donate" className="btn btn-primary ml-4">
                  Donate Food
                </Link>
              </div>
            </div>
          )}
        </span>
        <span className="mt-3 card-span" style={{ height: 'inherit' }}>
          <div className="card side-span-card">
            <img
              src={profileImageUrl}
              className="card-img-top card-img-size px-2 py-3 rounded-sm"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'blue' }}>
                Email: {email}
              </h5>
              <div className="card-text">
                <p>
                  <b>Address</b>: {address}
                </p>
                <p>City: {city}</p>
                <p>PIN Code: {pincode}</p>
                <p>Phone Number: {phoneNumber}</p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
