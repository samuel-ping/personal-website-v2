import React from "react";
import IconBarButton from "components/IconBarButton";
import "components/Iconbar.css";

const Iconbar = (props) => {
  if (props.isMobile) {
    return (
      <div className="iconbar-wrapper">
        <span>
          <IconBarButton isGitHub="true" isMobile={props.isMobile} />
          <IconBarButton isLinkedIn="true" isMobile={props.isMobile} />
        </span>
        <span>
          <IconBarButton isResume="true" isMobile={props.isMobile} />
          <IconBarButton isEmail="true" isMobile={props.isMobile} />
        </span>
      </div>
    );
  }
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
