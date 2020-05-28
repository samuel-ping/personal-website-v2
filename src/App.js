import React from "react";
import ScrollToTopArrow from "./components/ScrollToTopArrow";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTopArrow />
      <div className="full-page">
        <Landing />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
