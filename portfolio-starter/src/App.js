import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;