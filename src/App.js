import React from "react";
import ScrollToTopArrow from "./components/ScrollToTopArrow";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <ScrollToTopArrow />
      <div>
        <Landing />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
};

export default App;
