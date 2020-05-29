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
  if (props.isMobile) {
    return (
      <div className="a-project-wrapper-mobile">
        <div className="a-project-top-wrapper-mobile">
          <div className="a-project-title-mobile">{props.title}</div>
          {props.hasGitHub ? (
            <SmallIconButton
              isMobile="true"
              isGitHub="true"
              link={props.githubLink}
            />
          ) : null}
          {props.hasWebsite ? (
            <SmallIconButton
              isMobile="true"
              isWebsite="true"
              link={props.websiteLink}
            />
          ) : null}
        </div>
        <div className="a-project-description-mobile">{props.description}</div>
        {props.description2 ? (
          <>
            <br />
            <div
              className="a-project-description-mobile"
              dangerouslySetInnerHTML={{ __html: props.description2 }}
            />
          </>
        ) : null}
        <div className="a-project-technologies-mobile">
          Technologies used: {props.technologies}
        </div>
      </div>
    );
  } else {
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
            <>
              <br />
              <div
                className="a-project-description"
                dangerouslySetInnerHTML={{ __html: props.description2 }}
              />
            </>
          ) : null}
          <div className="a-project-technologies">
            Technologies used: {props.technologies}
          </div>
        </div>
      </div>
    );
  }
};

export default AProject;
