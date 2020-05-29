import React from "react";
import "./AboutMe.css";

const AboutMe = (props) => {
  const myDescription = {
    main:
      "Hi! I'm Samuel Ping, and I'm a freshman at Rutgers University- New Brunswick studying computer science and business. Back in 3rd grade, I wanted to be an inventor when I grew up. I've unconsciously followed that aspiration throughout my life, from spending hours in the middle of my pile of Legos, to enjoying robotics classes, until I took my first introductory computer programming course in 8th grade which sparked my interest in computer science. Recently, I realized that building things is my passion. Since then, I've been pursuing my passion for creating new things.",
    secondary:
      "Apart from programming, I love playing tennis, acting, and tinkering with computer hardware. I'm also a fan of all things green! Except boogers.",
  };

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    if (!props.isMobile) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }
  });

  if (props.isMobile) {
    return (
      <div className="about-me-wrapper-mobile">
        <div className="page-header-mobile" ref={domRef}>
          About Me
        </div>
        <hr className="divider" />
        <div className="description-mobile">
          {myDescription.main}
          <br />
          <br />
          {myDescription.secondary}
        </div>
      </div>
    );
  } else {
    return (
      <div className="about-me-wrapper">
        <div className={isVisible ? "page-header" : undefined} ref={domRef}>
          About Me
        </div>
        <div className={isVisible ? "vertical-divider" : undefined} />
        <div className={isVisible ? "description" : undefined}>
          {myDescription.main}
          <br />
          <br />
          {myDescription.secondary}
        </div>
      </div>
    );
  }
};

export default AboutMe;
