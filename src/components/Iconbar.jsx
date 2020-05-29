import React from "react";
import IconBarButton from "./IconBarButton";
import "./Iconbar.css";

const Iconbar = (props) => {
  return (
    <div className="iconbar-wrapper">
      <IconBarButton isGitHub="true" isMobile={props.isMobile} />
      <IconBarButton isLinkedIn="true" isMobile={props.isMobile} />
      <IconBarButton isResume="true" isMobile={props.isMobile} />
      <IconBarButton isEmail="true" isMobile={props.isMobile} />
    </div>
  );
};

export default Iconbar;
