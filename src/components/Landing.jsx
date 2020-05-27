import React, { Component } from "react";
import Iconbar from "./Iconbar";
import Image from "./Image";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="landing-wrapper">
          <div className="landing-left-side">
            <div className="name-intro">Hey! I'm Sam,</div>
            <div className="tagline">
              an aspiring CS major at
              <div className="rutgers">Rutgers University- New Brunswick</div>.
            </div>
            <Iconbar />
          </div>
          <div className="landing-right-side">
            <Image isMe="true" />
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
