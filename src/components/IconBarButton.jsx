import React from "react";
import { IconContext } from "react-icons";
import {
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon,
  FaPortrait as ResumeIcon,
} from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
import Resume from "assets/resume.pdf";
import "components/IconBarButton.css";

const IconBarButton = (props) => {
  if (props.isMobile) {
    return (
      <IconContext.Provider value={{ className: "icon-mobile" }}>
        {props.isGitHub ? (
          <>
            <a
              className="button-mobile"
              href="https://github.com/samuel-ping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </>
        ) : null}
        {props.isLinkedIn ? (
          <>
            <a
              className="button-mobile"
              href="https://linkedin.com/in/samuelping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </>
        ) : null}
        {props.isResume ? (
          <>
            <a
              className="button-mobile"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon />
            </a>
          </>
        ) : null}
        {props.isEmail ? (
          <>
            <a
              className="button-mobile"
              href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </a>
          </>
        ) : null}
      </IconContext.Provider>
    );
  } else {
    return (
      <IconContext.Provider value={{ className: "icon" }}>
        {props.isGitHub ? (
          <>
            <a
              className="button"
              href="https://github.com/samuel-ping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </>
        ) : null}
        {props.isLinkedIn ? (
          <>
            <a
              className="button"
              href="https://linkedin.com/in/samuelping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </>
        ) : null}
        {props.isResume ? (
          <>
            <a
              className="button"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon />
            </a>
          </>
        ) : null}
        {props.isEmail ? (
          <>
            <a
              className="button"
              href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </a>
          </>
        ) : null}
      </IconContext.Provider>
    );
  }
};

export default IconBarButton;
