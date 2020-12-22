import React, { Component, Fragment } from 'react';
import Select from 'react-select';

import Navbar from './Navbar';

import './MessCreateMenu.css';

const food = ['breakfast', 'lunch', 'dinner'];

const tabMap = {
  0: 'Breakfast',
  1: 'Lunch',
  2: 'Dinner'
};

const colorOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class MessCreateMenu extends Component {
  state = {
    breakfast: [],
    lunch: [],
    dinner: [],
    foodItem: '',
    selectedTab: 0
  };

  onInputChange = (foodItem) => {
    this.setState({ foodItem });
  };

  addItem = (arr, foodItem) => {
    if (foodItem !== '') {
      this.setState({
        [arr]: [...this.state[arr], foodItem],
        foodItem: ''
      });
    }
  };

  removeItem = (arr, idx) => {
    this.setState({
      [arr]: this.state[arr].filter((_, index) => index !== idx)
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
              <li key={idx} className={idx <= selectedTab ? 'active' : ''}>
                {item}
              </li>
            ))}
          </ul>
          <fieldset>
            <h2 className="fs-title">Create your menu</h2>
            <h3 className="fs-subtitle">{tabMap[selectedTab]}</h3>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={colorOptions[0]}
              isSearchable
              name="color"
              options={colorOptions}
            />
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
                          onClick={() => this.removeItem('breakfast', idx)}
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
                          onClick={() => this.removeItem('lunch', idx)}
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
                          onClick={() => this.removeItem('dinner', idx)}
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
