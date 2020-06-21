import React from "react";

import Navbar from "./Navbar";

import "./MessCreateMenu.css";

function MessCreateMenu() {
  return (
    <div className="messcmbody">
      <Navbar />
      <form className="msform">
        <ul className="progressbar">
          <li className="active">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        <fieldset>
          <h2 className="fs-title">Create your menu</h2>
          <h3 className="fs-subtitle">Breakfast</h3>
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
          <div className="foodlist">
            <div className="food-item">
              <span className="food-name">Pheromosa</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Buzzwole</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Kartana</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Celesteela</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Xurkitree</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Guzzlord</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Nihilego</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
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
          <div className="foodlist">
            <div className="food-item">
              <span className="food-name">Pheromosa</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Buzzwole</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Kartana</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Celesteela</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Xurkitree</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Guzzlord</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Nihilego</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
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
          <div className="foodlist">
            <div className="food-item">
              <span className="food-name">Pheromosa</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Buzzwole</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Kartana</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Celesteela</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Xurkitree</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Guzzlord</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
              </span>
            </div>
            <div className="food-item">
              <span className="food-name">Nihilego</span>
              <span>
                <button type="button" className="addbutton bg-info">
                  –
                </button>
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
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default MessCreateMenu;
