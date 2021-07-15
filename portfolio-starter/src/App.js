import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import ProjectDetail from "./ProjectDetail";
import { Projects } from "./Projects";
import { Route, Switch } from 'react-router-dom';

function NotFound() {
  return <h3>Not Found 🤷‍♀️ 🤷‍♂️</h3>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;