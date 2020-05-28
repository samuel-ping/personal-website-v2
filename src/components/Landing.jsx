import React from "react";
import Iconbar from "./Iconbar";
import Image from "./Image";
import "./Landing.css";

const Landing = () => {
    return (
      <>
        <div className="landing-wrapper">
          <div className="landing-left-side">
            <div className="name-intro">Hey! I'm Sam,</div>
            <div className="tagline">
              an aspiring CS major at Rutgers University- New Brunswick.
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


export default Landing;
