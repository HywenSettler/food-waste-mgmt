import React, { Fragment } from 'react';

const MenuDisplay = () => {
  return (
    <Fragment>
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
                <li class="list-group-item">Bread</li>
                <li class="list-group-item">Milk</li>
                <li class="list-group-item">Muesli</li>
                <li class="list-group-item">Cutlets</li>
                <li class="list-group-item">Samosa</li>
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
                <li class="list-group-item">Rajma</li>
                <li class="list-group-item">Chapati</li>
                <li class="list-group-item">Rice</li>
                <li class="list-group-item">Salad</li>
                <li class="list-group-item">Raita/Buttermilk</li>
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
                <li class="list-group-item">Naan</li>
                <li class="list-group-item">Makhni Daal</li>
                <li class="list-group-item">Shahi Paneer</li>
                <li class="list-group-item">Rice</li>
                <li class="list-group-item">Raita</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuDisplay;
