import React, { Component } from "react";
import Portrait from "../assets/portrait-full.JPEG";
import "./Image.css";

const Image = (props) => {
  return (
    <>
      <div className="image-container">
        {props.isMe ? <img className="image" src={Portrait} alt="me" /> : null}
      </div>
    </>
  );
};

export default Image;
