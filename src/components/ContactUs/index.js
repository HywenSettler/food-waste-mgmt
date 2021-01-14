import React from 'react';

import './ContactUs.css';
import Navbar from '../Navbar';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="externcontdiv">
        <div className="container contdiv">
          <h1 className="mb-4 headingstyle">Drop Us a Line</h1>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputsty"
                id="inputAddress"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputsty"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="E-mail Address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputsty"
                id="inputAddress"
                placeholder="Organization Name"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control textstyle"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3 button-width">
              Submit
            </button>
          </form>
        </div>
        <div className="container imagediv">
          <img
            src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1610650548/food-waste-mgmt/Contact.png"
            className="imagesize"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
