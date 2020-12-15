import React, { Component, Fragment } from "react";
import SelectSearch from "react-select-search";

import Navbar from "./Navbar";

import "./MessCreateMenu.css";
import "./Search.css";

const food = ["breakfast", "lunch", "dinner"];
const tabMap = {
  0: "Breakfast",
  1: "Lunch",
  2: "Dinner",
};

const options = [
  { name: "Swedish", value: "sv" },
  { name: "English", value: "en" },
];

class MessCreateMenu extends Component {
  state = {
    breakfast: [],
    lunch: [],
    dinner: [],
    foodItem: "",
    selectedTab: 0,
  };

  onInputChange = (foodItem) => {
    this.setState({ foodItem });
  };

  addItem = (arr, foodItem) => {
    if (foodItem !== "") {
      this.setState({
        [arr]: [...this.state[arr], foodItem],
        foodItem: "",
      });
    }
  };

  removeItem = (arr, idx) => {
    this.setState({
      [arr]: this.state[arr].filter((_, index) => index !== idx),
    });
  };

  render() {
    const { foodItem, breakfast, lunch, dinner, selectedTab } = this.state;

    return (
      <div className="messcmbody">
        <Navbar />
        <form className="msform">
          <ul className="progressbar pl-0">
            {food.map((item, idx) => (
              <li key={idx} className={idx <= selectedTab ? "active" : ""}>
                {item}
              </li>
            ))}
          </ul>

          <fieldset>
            <h2 className="fs-title">Create your menu</h2>
            <h3 className="fs-subtitle">{tabMap[selectedTab]}</h3>
            <div className="input-group">
              {/* <SelectSearch
                options={options}
                value="sv"
                name="language"
                placeholder="Choose your language"
                search
                autoFocus
              /> */}
              <input
                type="text"
                value={foodItem}
                onChange={(e) => this.onInputChange(e.target.value)}
                className="form-control add-item-input"
                placeholder="Add food item"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-success text-white"
                  onClick={() =>
                    this.addItem(tabMap[selectedTab].toLowerCase(), foodItem)
                  }
                  type="button"
                  id="button-addon2"
                >
                  +
                </button>
              </div>
            </div>
            {selectedTab === 0 && (
              <Fragment>
                <div className="foodlist">
                  {breakfast.map((item, idx) => (
                    <div key={item} className="food-item">
                      <span className="food-image">
                        <img
                          src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
                          height="50px"
                          width="60px"
                        />
                      </span>
                      <span className="food-name">{item}</span>
                      <span>
                        <button
                          type="button"
                          onClick={() => this.removeItem("breakfast", idx)}
                          className="addbutton bg-info"
                        >
                          –
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
                <input
                  type="button"
                  onClick={() =>
                    this.setState({ selectedTab: selectedTab + 1 })
                  }
                  name="next"
                  className="next action-button"
                  value="Next"
                />
              </Fragment>
            )}
            {selectedTab === 1 && (
              <Fragment>
                <div className="foodlist">
                  {lunch.map((item, idx) => (
                    <div key={item} className="food-item">
                      <span className="food-name">{item}</span>
                      <span>
                        <button
                          type="button"
                          onClick={() => this.removeItem("lunch", idx)}
                          className="addbutton bg-info"
                        >
                          –
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
                <input
                  type="button"
                  onClick={() =>
                    this.setState({ selectedTab: selectedTab - 1 })
                  }
                  name="previous"
                  className="previous action-button"
                  value="Previous"
                />
                <input
                  type="button"
                  onClick={() =>
                    this.setState({ selectedTab: selectedTab + 1 })
                  }
                  name="next"
                  className="next action-button"
                  value="Next"
                />
              </Fragment>
            )}
            {selectedTab === 2 && (
              <Fragment>
                <div className="foodlist">
                  {dinner.map((item, idx) => (
                    <div key={item} className="food-item">
                      <span className="food-name">{item}</span>
                      <span>
                        <button
                          type="button"
                          onClick={() => this.removeItem("dinner", idx)}
                          className="addbutton bg-info"
                        >
                          –
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
                <input
                  type="button"
                  onClick={() =>
                    this.setState({ selectedTab: selectedTab - 1 })
                  }
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
              </Fragment>
            )}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MessCreateMenu;
