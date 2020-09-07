import React from "react";
import { IconContext } from "react-icons";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { FiMonitor as WebsiteIcon } from "react-icons/fi";
import "components/SmallIconButton.css";

// Takes the following props:
// - link
// - isGitHub
// - isWebsite

const SmallIconButton = (props) => {
  if (props.isMobile) {
    return (
      <IconContext.Provider value={{ className: "icon-button-wrapper-mobile" }}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.isGitHub ? <GitHubIcon /> : null}
          {props.isWebsite ? <WebsiteIcon /> : null}
        </a>
      </IconContext.Provider>
    );
  } else {
    return (
      <IconContext.Provider value={{ className: "icon-button-wrapper" }}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.isGitHub ? <GitHubIcon /> : null}
          {props.isWebsite ? <WebsiteIcon /> : null}
        </a>
      </IconContext.Provider>
    );
  }
};

export default SmallIconButton;
