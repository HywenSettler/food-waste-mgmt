import React, { useState, useEffect } from 'react';
import axios from 'axios';
import get from 'lodash.get';

import './MessCreateMenu.css';
import './MessFoodDonate.css';

import Navbar from './Navbar';

const food = ['breakfast', 'lunch', 'dinner'];

const tabMap = {
  0: 'Breakfast',
  1: 'Lunch',
  2: 'Dinner'
};

const MessFoodDonate = () => {
  const [menu, setMenu] = useState({
    breakfast: [],
    lunch: [],
    dinner: []
  });

  const [quantities, setQuantities] = useState({});

  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    axios.get('/menu').then((res) => {
      let mappedData = {
        breakfast: [],
        lunch: [],
        dinner: []
      };

      for (let item of res.data) {
        mappedData[item.type].push(item);
      }

      setMenu(mappedData);
    });
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(quantities);
  };

  return (
    <div className="messcmbody">
      <Navbar />
      <form className="msform" onSubmit={onFormSubmit}>
        <ul className="progressbar pl-0">
          {food.map((item, idx) => (
            <li key={idx} className={idx <= selectedTab ? 'active' : ''}>
              {item}
            </li>
          ))}
        </ul>
        <fieldset>
          <h2 className="fs-title">Donate food</h2>
          <h3 className="fs-subtitle">{tabMap[selectedTab]}</h3>
          <div className="text-center">
            Quantities must be entered per person basis.
          </div>
          {selectedTab === 0 && (
            <>
              <div className="donate-foodlist">
                {menu.breakfast.map((item) => (
                  <div key={item.id} className="donate-food-item">
                    <span className="food-image">
                      <img
                        src={item.image_url}
                        height="50px"
                        width="60px"
                        alt=""
                      />
                    </span>
                    <span className="food-name">{item.name}</span>
                    <span>
                      <input
                        type="number"
                        className="item-number"
                        min="0"
                        value={get(quantities, item.id, 0)}
                        onChange={(e) =>
                          setQuantities({
                            ...quantities,
                            [item.id]: e.target.value
                          })
                        }
                      ></input>
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
            </>
          )}
          {selectedTab === 1 && (
            <>
              <div className="donate-foodlist">
                {menu.lunch.map((item) => (
                  <div key={item.id} className="donate-food-item">
                    <span className="food-image">
                      <img
                        src={item.image_url}
                        height="50px"
                        width="60px"
                        alt=""
                      />
                    </span>
                    <span className="food-name">{item.name}</span>
                    <span>
                      <input
                        type="number"
                        className="item-number"
                        min="0"
                        value={get(quantities, item.id, 0)}
                        onChange={(e) =>
                          setQuantities({
                            ...quantities,
                            [item.id]: e.target.value
                          })
                        }
                      ></input>
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
            </>
          )}
          {selectedTab === 2 && (
            <>
              <div className="donate-foodlist">
                {menu.dinner.map((item) => (
                  <div key={item.id} className="donate-food-item">
                    <span className="food-image">
                      <img
                        src={item.image_url}
                        height="50px"
                        width="60px"
                        alt=""
                      />
                    </span>
                    <span className="food-name">{item.name}</span>
                    <span>
                      <input
                        type="number"
                        className="item-number"
                        min="0"
                        value={get(quantities, item.id, 0)}
                        onChange={(e) =>
                          setQuantities({
                            ...quantities,
                            [item.id]: e.target.value
                          })
                        }
                      ></input>
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
                value="Donate"
              />
            </>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default MessFoodDonate;
