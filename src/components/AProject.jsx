import React from "react";
import SmallIconButton from "components/SmallIconButton";
import "components/AProject.css";

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
          <div className="a-project-top-wrapper-left-side-mobile">
            <span className="a-project-title-mobile">{props.title}</span>{" "}
            <span className="timeframe-mobile">{props.timeframe}</span>
            <span>
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
            </span>
          </div>
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
            <div className="a-project-top-wrapper-left-side">
              <span className="a-project-title">{props.title}</span>
              <span>
                {props.hasGitHub ? (
                  <SmallIconButton isGitHub="true" link={props.githubLink} />
                ) : null}
                {props.hasWebsite ? (
                  <SmallIconButton isWebsite="true" link={props.websiteLink} />
                ) : null}
              </span>
            </div>
            <span className="timeframe">{props.timeframe}</span>
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
