import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

const MenuDisplay = () => {
  const [menu, setMenu] = useState({
    breakfast: [],
    lunch: [],
    dinner: []
  });

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

  return (
    <Fragment>
      <Navbar />
      <div class="row" id="Menu">
        <div class="col navMenu">
          <h2 class="text-center">Menu</h2>
        </div>
      </div>
      <div class="row bg-light">
        <div class="col-md-4" data-aos="slide-up">
          <div class="card view zoom">
            <img
              class="card-img-top img-fluid"
              alt="menu"
              src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
            />
            <div class="card-body">
              <h5 class="card-title"> Breakfast Menu </h5>
              <ul class="list-group list-group-flush">
                {menu.breakfast.map((item) => (
                  <li class="list-group-item" key={item.id}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="slide-up">
          <div class="card">
            <img
              class="card-img-top img-fluid"
              alt="menu"
              src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
            />
            <div class="card-body">
              <h5 class="card-title"> Lunch Menu </h5>
              <ul class="list-group list-group-flush">
                {menu.lunch.map((item) => (
                  <li class="list-group-item" key={item.id}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="slide-up">
          <div class="card">
            <img
              class="card-img-top img-fluid"
              alt="menu"
              src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
            />
            <div class="card-body">
              <h5 class="card-title"> Dinner Menu </h5>
              <ul class="list-group list-group-flush">
                {menu.dinner.map((item) => (
                  <li class="list-group-item" key={item.id}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuDisplay;
