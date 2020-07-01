import React, { Component } from "react";

import Navbar from "./Navbar";

import "./ContactUs.css";

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="externcontdiv">
          <div class="container contdiv">
            <h1 class="mb-4 headingstyle">Drop Us a line</h1>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control inputsty"
                  id="inputAddress"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control inputsty"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="E-mail Address"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control inputsty"
                  id="inputAddress"
                  placeholder="Organization Name"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control textstyle"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
          <div class="container imagediv">
            <img src="1.jpg" class="imagesize" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
