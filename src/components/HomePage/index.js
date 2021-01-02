import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';

import Navbar from '../Navbar';

const HomePage = () => {
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
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699318/food-waste-mgmt/children-sitting.jpg"
              className="d-block w-100 carousel-image"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699286/food-waste-mgmt/children-eating.jpg"
              className="d-block w-100 carousel-image"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699267/food-waste-mgmt/im-hungry.jpg"
              className="d-block w-100 carousel-image"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699320/food-waste-mgmt/sankalp-club.jpg"
              className="d-block w-100 carousel-image"
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
      <div className="problemdiv">
        <h1>The Problem</h1>
        <p className="problem-text">
          There is food for everyone on this planet; not everyone eats.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div>
                <img
                  src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
                  className="problem-image"
                  alt=""
                />
              </div>
              <div>1.3 billion tonnes of food is being wasted annually.</div>
            </div>
            <div className="col-sm">
              <div>
                <img
                  src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699267/food-waste-mgmt/masked-children.jpg"
                  className="problem-image"
                  alt=""
                />
              </div>
              <div>
                Saving one-fourth of the food currently wasted globally would be
                enough to feed 870 million hungry people in the world.
              </div>
            </div>
            <div className="col-sm">
              <div>
                <img
                  src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699254/food-waste-mgmt/naked-baby.jpg"
                  className="problem-image"
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
                  src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699258/food-waste-mgmt/old-men.jpg"
                  className="problem-image"
                  alt=""
                />
              </div>
              <div>194 million Indians are undernourished.</div>
            </div>
            <div className="col-sm">
              <div>
                <img
                  src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699244/food-waste-mgmt/hungry-children.jpg"
                  className="problem-image"
                  alt=""
                />
              </div>
              <div>
                According to the 2019 Global Hunger Index, India has been ranked
                102 out of 117 countries in terms of severity of hunger.
              </div>
            </div>
            <div className="col-sm">
              <div>
                <img
                  src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699272/food-waste-mgmt/hungry-women.jpg"
                  className="problem-image"
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
      <div className="visiondiv">
        <h1>Our Vision</h1>
        <p className="visiontext">
          Although food wastage is a global problem, India stands a chance to
          convert this into an opportunity. Every third malnourished child is
          Indian. Even so, we are witness to this significant amount of food
          wastage that occurs because of gaps in supplying the surplus food to
          the needy. This chain, if addressed, can help bring down the wastage
          in food. And we want to be a part of that chain by serving as a median
          between food-producing and food-supplying services.
        </p>
      </div>
      <div className="hcyhdiv">
        <h1 className="mb-4 text-white">How You Can Help</h1>
        <div className="hcyhlist">
          <div>
            <h5 className="hcyhitem">Contribute Food</h5>
            <p>
              If you are the owner or manager of a restaurant, or generally want
              to contribute meals, let's join.
            </p>
          </div>
          <div>
            <h5 className="hcyhitem">Donate</h5>
            <p>
              If you are not unable to contribute food, but want to support to
              the foundation, donate to the cause.
            </p>
          </div>
        </div>
      </div>
      <div className="concerndiv">
        <span className="mx-4">Any concerns you have?</span>
        <span className="mx-4">
          <input type="button" value="Talk to Us" className="ttubutton" />
        </span>
      </div>
      <footer className="footer-styling bg-secondary text-white">
        <div className="footersection">
          <div className="footerheading">Who we are</div>
          <div className="footeritem">
            <Link to="/about" className="nav-link text-white pl-0 py-0">
              {' '}
              About Us
            </Link>
          </div>
          <div className="footeritem">
            <Link to="/contact" className="nav-link text-white pl-0 py-0">
              {' '}
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footersection">
          <div className="footerheading">Get Involved</div>
          <div className="footeritem">Donate</div>
          <div className="footeritem">Partner With Us</div>
        </div>
        <div className="footersection">
          <div className="footerheading">Social</div>
          <div>
            <span className="social-icons">
              <i className="bi bi-facebook"></i>
            </span>
            <span className="social-icons">
              <i className="bi bi-instagram"></i>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
