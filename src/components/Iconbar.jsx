import React from "react";
import IconBarButton from "./IconBarButton";
import "./Iconbar.css";

const Iconbar = () => {
  return (
    <div className="iconbar-wrapper">
      <IconBarButton isGitHub="true" />
      <IconBarButton isLinkedIn="true" />
      <IconBarButton isResume="true" />
      <IconBarButton isEmail="true" />
    </div>
  );
};

export default Iconbar;
