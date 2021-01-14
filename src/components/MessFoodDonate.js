import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    // breakfast: [],
    breakfast: [
      {
        name: 'cutlet',
        image_url:
          'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
        id: 1
      },
      {
        name: 'sambhar',
        image_url:
          'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
        id: 2
      }
    ],
    lunch: [],
    dinner: []
  });

  const [selectedTab, setSelectedTab] = useState(0);

  // useEffect(() => {
  //   axios.get('/menu').then((res) => {
  //     let mappedData = {
  //       breakfast: [],
  //       lunch: [],
  //       dinner: []
  //     };

  //     for (let item of res.data) {
  //       mappedData[item.type].push(item);
  //     }

  //     setMenu(mappedData);
  //   });
  // }, []);

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
                <div className="donate-food-item">
                  <span className="donate-food-name">Pheromosa</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
                <div className="donate-food-item">
                  <span className="donate-food-name">Kartana</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
                <div className="donate-food-item">
                  <span className="donate-food-name">Celesteela</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
                <div className="donate-food-item">
                  <span className="donate-food-name">Guzzlord</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
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
                <div className="donate-food-item">
                  <span className="donate-food-name">Pheromosa</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
                <div className="donate-food-item">
                  <span className="donate-food-name">Kartana</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
                <div className="donate-food-item">
                  <span className="donate-food-name">Celesteela</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
                <div className="donate-food-item">
                  <span className="donate-food-name">Guzzlord</span>
                  <span>
                    <input
                      type="number"
                      className="item-number"
                      min="0"
                    ></input>
                  </span>
                </div>
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
