import React from "react";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    <>
      <div className="full-page">
        <Landing />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
