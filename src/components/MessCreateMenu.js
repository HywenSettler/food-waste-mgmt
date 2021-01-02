import React, { useState, Fragment } from 'react';
import AsyncSelect from 'react-select/async';

import foodMgmtApi from '../api';
import Navbar from './Navbar';

import './MessCreateMenu.css';

const food = ['breakfast', 'lunch', 'dinner'];

const tabMap = {
  0: 'Breakfast',
  1: 'Lunch',
  2: 'Dinner'
};

const MessCreateMenu = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const removeItem = (setterFunction, idx) => {
    setterFunction((foodArray) =>
      foodArray.filter((_, index) => index !== idx)
    );
  };

  const loadFoodItems = (inputValue, callback) => {
    foodMgmtApi
      .get('/items', {
        params: {
          type: tabMap[selectedTab].toLowerCase(),
          searchQuery: inputValue
        }
      })
      .then((res) => {
        callback(
          res.data.map((item) => ({
            label: item.name,
            value: item
          }))
        );
      });
  };

  const handleChange = (selectedOption) => {
    switch (selectedTab) {
      case 0:
        setBreakfast([...breakfast, selectedOption.value]);
        return;
      case 1:
        setLunch([...lunch, selectedOption.value]);
        return;
      case 3:
        setDinner([...dinner, selectedOption.value]);
        return;
      default:
        return;
    }
  };

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
          <AsyncSelect
            className="basic-single"
            classNamePrefix="select"
            isSearchable
            name="color"
            loadOptions={loadFoodItems}
            onChange={handleChange}
          />
          {selectedTab === 0 && (
            <Fragment>
              <div className="foodlist">
                {breakfast.map((item, idx) => (
                  <div key={item.id} className="food-item">
                    <span className="food-image">
                      <img src={item.image_url} height="50px" width="60px" />
                    </span>
                    <span className="food-name">{item.name}</span>
                    <span>
                      <i
                        className="bi bi-trash-fill"
                        style={{
                          fontSize: '1.5rem',
                          color: 'red',
                          cursor: 'pointer',
                          marginRight: '1.1rem'
                        }}
                        onClick={() => removeItem(setBreakfast, idx)}
                      ></i>
                    </span>
                  </div>
                ))}
              </div>
              <input
                type="button"
                onClick={() => setSelectedTab(selectedTab + 1)}
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
                  <div key={item.id} className="food-item">
                    <span className="food-image">
                      <img src={item.image_url} height="50px" width="60px" />
                    </span>
                    <span className="food-name">{item.name}</span>
                    <span>
                      <button
                        type="button"
                        onClick={() => removeItem(setLunch, idx)}
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
                onClick={() => setSelectedTab(selectedTab - 1)}
                name="previous"
                className="previous action-button"
                value="Previous"
              />
              <input
                type="button"
                onClick={() => setSelectedTab(selectedTab + 1)}
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
                  <div key={item.id} className="food-item">
                    <span className="food-image">
                      <img src={item.image_url} height="50px" width="60px" />
                    </span>
                    <span className="food-name">{item.name}</span>
                    <span>
                      <button
                        type="button"
                        onClick={() => removeItem(setDinner, idx)}
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
                onClick={() => setSelectedTab(selectedTab - 1)}
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
};

export default MessCreateMenu;
