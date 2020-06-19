import React, { Component } from "react";

import Navbar from "./Navbar";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">ABOUT US</h1>
            <p className="lead">
              This project has been developed by a team of three students from
              the LNM Institute of Information Technology, with the intention of
              reducing food waste, and making more food available to those who
              need it. Built conscientiously and with great patience, we have
              incorporated all modern features into our website, but not at the
              ease of use for our users. We hope our contribution to the mission
              of ending global hunger is significant, and together we step
              closer to this dream of achieving global contentment in regards to
              food.
            </p>
            <hr className="my-4" />
            <p>
              We operate in a volunteer network; registered organizations pick
              up food from registered messes, and distribute them to
              beneficiaries in need. Our process helps rescue and reroute fresh
              consumable food, which would otherwise get wasted, to those in
              need of regular access to food.
            </p>
            <p>
              Our beneficiaries include but are not limited to children, women,
              the elderly, specially-abled and migrant labourers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
