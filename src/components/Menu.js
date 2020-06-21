import React, { Component, Fragment } from "react";

export class Menu extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Menu;
