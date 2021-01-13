import React from 'react';

import './MessCreateMenu.css';
import './MessFoodDonate.css';

import Navbar from './Navbar';

const MessFoodDonate = () => {
  return (
    <div className="messcmbody">
      <Navbar />
      <form className="msform">
        <ul className="progressbar pl-0">
          <li className="active">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        <fieldset>
          <h2 className="fs-title">Donate food</h2>
          <h3 className="fs-subtitle">Breakfast</h3>
          <div className="text-center">
            Quantities must be entered per person basis.
          </div>
          <div className="donate-foodlist">
            <div className="donate-food-item">
              <span className="donate-food-name">Cutlets</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Bread slices</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
          </div>
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
          />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Create your menu</h2>
          <h3 className="fs-subtitle">Lunch</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control add-item-input"
              placeholder="Add food item"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-success text-white"
                type="button"
                id="button-addon2"
              >
                +
              </button>
            </div>
          </div>
          <div className="donate-foodlist">
            <div className="donate-food-item">
              <span className="donate-food-name">Pheromosa</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Kartana</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Celesteela</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Guzzlord</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
          </div>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
          />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
          />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Create your menu</h2>
          <h3 className="fs-subtitle">Dinner</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control add-item-input"
              placeholder="Add food item"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-success text-white"
                type="button"
                id="button-addon2"
              >
                +
              </button>
            </div>
          </div>
          <div className="donate-foodlist">
            <div className="donate-food-item">
              <span className="donate-food-name">Pheromosa</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Kartana</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Celesteela</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
            <div className="donate-food-item">
              <span className="donate-food-name">Guzzlord</span>
              <span>
                <input type="number" className="item-number" min="0"></input>
              </span>
            </div>
          </div>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
          />
          <input
            type="submit"
            name="submit"
            className="submit action-button"
            value="Donate"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default MessFoodDonate;
