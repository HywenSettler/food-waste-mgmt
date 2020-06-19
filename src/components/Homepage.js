import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assets/images/children-eating.jpg"
                className="d-block w-100 imag1"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/images/children-sitting.jpg"
                className="d-block w-100 imag1"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/images/food-wasted.jpg"
                className="d-block w-100 imag1"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/images/hungry-children.jpg"
                className="d-block w-100 imag1"
                alt=""
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="div1">
          <h1>The Problem</h1>
          <p className="p1">
            There is food for everyone on this planet; not everyone eats.
          </p>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div>
                  <img
                    src="assets/images/hungry-women.jpg"
                    className="pokimg"
                    alt=""
                  />
                </div>
                <div>1.3 billion tonnes of food is being wasted annually.</div>
              </div>
              <div className="col-sm">
                <div>
                  <img
                    src="assets/images/im-hungry.jpg"
                    className="pokimg"
                    alt=""
                  />
                </div>
                <div>
                  Saving one-fourth of the food currently wasted globally would
                  be enough to feed 870 million hungry people in the world.
                </div>
              </div>
              <div className="col-sm">
                <div>
                  <img
                    src="assets/images/masked-children.jpg"
                    className="pokimg"
                    alt=""
                  />
                </div>
                <div>
                  Fifteen percent of the Indian population sleeps hungry every
                  night.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div>
                  <img
                    src="assets/images/naked-baby.jpg"
                    className="pokimg"
                    alt=""
                  />
                </div>
                <div>194 million Indians are undernourished.</div>
              </div>
              <div className="col-sm">
                <div>
                  <img
                    src="assets/images/old-men.jpg"
                    className="pokimg"
                    alt=""
                  />
                </div>
                <div>
                  According to the 2019 Global Hunger Index, India has been
                  ranked 102 out of 117 countries in terms of severity of
                  hunger.
                </div>
              </div>
              <div className="col-sm">
                <div>
                  <img
                    src="assets/images/sankalp-club.jpg"
                    className="pokimg"
                    alt=""
                  />
                </div>
                <div>
                  Globally, malnutrition is the cause of at least 45% of child
                  mortality, while in India, this number is 68.2%.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div1" style={{ backgroundColor: "rgb(163, 148, 161)" }}>
          <h1>Our Vision</h1>
          <p className="paragr1">
            Although food wastage is a global problem, India stands a chance to
            convert this into an opportunity. Every third malnourished child is
            Indian. Even so, we are witness to this significant amount of food
            wastage that occurs because of gaps in supplying the surplus food to
            the needy. This chain, if addressed, can help bring down the wastage
            in food. And we want to be a part of that chain by serving as a
            median between food-producing and food-supplying services.
          </p>
        </div>
        <div className="div2" style={{ backgroundColor: "rgb(57, 121, 133)" }}>
          <h1 className="headinstraight">How You Can Help</h1>
          <div className="div3">
            <div>
              <h5 className="heading2">Contribute Food</h5>
              <p>
                If you are the owner or manager of a restaurant, or generally
                want to contribute meals, let's join.
              </p>
            </div>
            <div>
              <h5 className="heading2">Donate</h5>
              <p>
                If you are not unable to contribute food, but want to support to
                the foundation, donate to the cause.
              </p>
            </div>
          </div>
        </div>
        <div className="div4">
          <span className="spn1">Any concerns you have?</span>
          <span className="spn1">
            <input type="button" value="Talk to Us" className="buton1" />
          </span>
        </div>
        <footer className="foot bg-secondary text-white">
          <div className="spn2">
            <div className="div5">Who we are</div>
            <Link to="/about" className="nav-link text-white pl-0 py-0">
              <div className="div6">About Us</div>
            </Link>
            <div className="div6">Contact Us</div>
          </div>
          <div className="spn2">
            <div className="div5">Get Involved</div>
            <div className="div6">Donate</div>
            <div className="div6">Partner With Us</div>
          </div>
          <div className="spn2">
            <div className="div5">Social</div>
            <div>
              <span className="spn3 mr-3">
                <i className="fab fa-facebook"></i>
              </span>
              <span className="spn3">
                <i className="fab fa-instagram"></i>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Homepage;
