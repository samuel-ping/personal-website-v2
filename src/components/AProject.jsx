import React from "react";
import SmallIconButton from "./SmallIconButton";
import "./AProject.css";

// AProject takes the following props:
// - title
// - description
// - description2
// - technologies
// - hasGitHub
//    - githubLink
// - hasWebsite
//    - websiteLink

const AProject = (props) => {
  return (
    <div className="a-project-wrapper">
      <div className="a-project-left">
        <div className="a-project-top-wrapper">
          <div className="a-project-title">{props.title}</div>
          {props.hasGitHub ? (
            <SmallIconButton isGitHub="true" link={props.githubLink} />
          ) : null}
          {props.hasWebsite ? (
            <SmallIconButton isWebsite="true" link={props.websiteLink} />
          ) : null}
        </div>
        <div className="a-project-description">{props.description}</div>
        {props.description2 ? (
          <div className="a-project-description">
            <br />
            {props.description2}
          </div>
        ) : null}
        <div className="a-project-technologies">
          Technologies used: {props.technologies}
        </div>
      </div>
      <div className="a-project-right"></div>
    </div>
  );
};

export default AProject;
