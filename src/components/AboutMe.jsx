import React, { Component } from "react";
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
        <div
          className={isVisible ? "page-header" : undefined}
          style={
            isVisible ? { visibility: "visible" } : { visibility: "hidden" }
          }
          ref={domRef}
        >
          About Me
        </div>
        <div
          className={isVisible ? "vertical-divider" : undefined}
          style={
            isVisible ? { visibility: "visible" } : { visibility: "hidden" }
          }
        />
        <div
          className={isVisible ? "description" : undefined}
          style={
            isVisible ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          Hi! I'm Samuel Ping, and I'm a freshman at Rutgers University- New
          Brunswick studying computer science and business. Back in 3rd grade, I
          wanted to be an inventor when I grew up. I forgot about that ambition
          for a while, until I took my first introductory computer programming
          course in 8th grade which sparked my interest in computer science.
          Since then, I've been pursuing my passion for creating new things.
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

// class AboutMe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { inView: false };
//     this.toggleVisible = this.toggleVisible.bind(this);
//   }

//   toggleVisible() {
//     this.setState({ inView: !this.state.inView });
//     console.log(this.state.inView);
//   }

//   render() {
//     return (
//       <>
//         <div className="about-me-wrapper">
//           <div className="page-header">About Me</div>
//           <div className="vertical-divider" />
//           <div className="description">
//             Hey! I'm Samuel Ping, and I'm a freshman at Rutgers University- New
//             Brunswick studying computer science and business. Back in 3rd grade,
//             I wanted to be an inventor when I grew up. I forgot about that
//             ambition for a while, until I took my first introductory computer
//             programming course in 8th grade which sparked my interest in
//             computer science. Since then, I've been pursuing my passion for
//             creating new things.
//             <br />
//             <br />
//             Apart from programming, I love playing tennis, acting, and tinkering
//             with computer hardware. I'm also a fan of all things green! Except
//             boogers.
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default AboutMe;
