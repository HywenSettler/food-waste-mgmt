import React, { Component } from "react";

import Navbar from "./Navbar";

import "./MessCreateMenu.css";
import "./MessFoodDonate.css";
import styled from "styled-components";

const YourEffect = styled.li`
  & {
    list-style-type: none;
    color: white;
    text-transform: uppercase;
    font-size: 9px;
    width: 33.33%;
    float: left;
    position: relative;
  }

  &:before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    line-height: 20px;
    display: block;
    font-size: 10px;
    color: #333;
    background: white;
    border-radius: 3px;
    margin: 0 auto 5px auto;
  }
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1;
  }

  &:first-child:after {
    content: none;
  }
  & .active:before,
  & .active:after {
    background: #27ae60;
    color: white;
  }
`;

export class MessFoodDonate extends Component {
  render() {
    return (
      <div class="messcmbody">
        <Navbar />
        <form class="msform">
          <ul class="progressbar">
            <YourEffect class="active">Breakfast</YourEffect>
            <YourEffect>Lunch</YourEffect>
            <YourEffect>Dinner</YourEffect>
          </ul>
          <fieldset>
            <h2 class="fs-title">Create your menu</h2>
            <h3 class="fs-subtitle">Breakfast</h3>
            <div class="input-group">
              <input
                type="text"
                class="form-control add-item-input"
                placeholder="Add food item"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary bg-success text-white"
                  type="button"
                  id="button-addon2"
                >
                  +
                </button>
              </div>
            </div>
            <div class="donate-foodlist">
              <div class="donate-food-item">
                <span class="donate-food-name">Pheromosa</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Kartana</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Celesteela</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Guzzlord</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
            </div>
            <input
              type="button"
              name="next"
              class="next action-button"
              value="Next"
            />
          </fieldset>
          <fieldset>
            <h2 class="fs-title">Create your menu</h2>
            <h3 class="fs-subtitle">Lunch</h3>
            <div class="input-group">
              <input
                type="text"
                class="form-control add-item-input"
                placeholder="Add food item"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary bg-success text-white"
                  type="button"
                  id="button-addon2"
                >
                  +
                </button>
              </div>
            </div>
            <div class="donate-foodlist">
              <div class="donate-food-item">
                <span class="donate-food-name">Pheromosa</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Kartana</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Celesteela</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Guzzlord</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
            </div>
            <input
              type="button"
              name="previous"
              class="previous action-button"
              value="Previous"
            />
            <input
              type="button"
              name="next"
              class="next action-button"
              value="Next"
            />
          </fieldset>
          <fieldset>
            <h2 class="fs-title">Create your menu</h2>
            <h3 class="fs-subtitle">Dinner</h3>
            <div class="input-group">
              <input
                type="text"
                class="form-control add-item-input"
                placeholder="Add food item"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary bg-success text-white"
                  type="button"
                  id="button-addon2"
                >
                  +
                </button>
              </div>
            </div>
            <div class="donate-foodlist">
              <div class="donate-food-item">
                <span class="donate-food-name">Pheromosa</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Kartana</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Celesteela</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
              <div class="donate-food-item">
                <span class="donate-food-name">Guzzlord</span>
                <span>
                  <input type="number" class="item-number" min="0"></input>
                </span>
              </div>
            </div>
            <input
              type="button"
              name="previous"
              class="previous action-button"
              value="Previous"
            />
            <input
              type="submit"
              name="submit"
              class="submit action-button"
              value="Submit"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MessFoodDonate;
