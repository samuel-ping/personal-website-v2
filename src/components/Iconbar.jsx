import React, { Component } from "react";
import IconButton from "./IconButton";
import "./Iconbar.css";

class Iconbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="iconbar-wrapper">
          <IconButton isGitHub="true" />
          <IconButton isLinkedIn="true" />
          <IconButton isResume="true" />
          <IconButton isEmail="true" />
        </div>
      </>
    );
  }
}

export default Iconbar;
