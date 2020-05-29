import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  });

  return (
    <>
      <div className="about-me-wrapper">
        <div className={isVisible ? "page-header" : undefined} ref={domRef}>
          About Me
        </div>
        <div className={isVisible ? "vertical-divider" : undefined} />
        <div className={isVisible ? "description" : undefined}>
          Hi! I'm Samuel Ping, and I'm a freshman at Rutgers University- New
          Brunswick studying computer science and business. Back in 3rd grade, I
          wanted to be an inventor when I grew up. I've unconsciously followed
          that passion throughout my life, from spending hours in the middle of
          my pile of Legos, to enjoying robotics classes, until I took my first
          introductory computer programming course in 8th grade which sparked my
          interest in computer science. Since then, I've been pursuing my
          passion for creating new things by coding.
          <br />
          <br />
          Apart from programming, I love playing tennis, acting, and tinkering
          with computer hardware. I'm also a fan of all things green! Except
          boogers.
        </div>
      </div>
    </>
  );
};

export default AboutMe;
