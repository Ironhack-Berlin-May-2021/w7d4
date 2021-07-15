import React from "react";
import { Link } from 'react-router-dom';

const myProjects = [
  {
    id: "1a",
    name: "The Frogger Clone",
    year: 2017,
    technologies: "JavaScript, jQuery",
    description: "The first project game clone."
  },
  {
    id: "2b",
    name: "iTravel",
    year: 2017,
    technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
    description:
      "Web App that allows logged in users to share their experiences about travel destinations."
  },
  {
    id: "3c",
    name: "The Plan",
    year: 2017,
    technologies:
      "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
    description:
      "Web App that allows logged in users to plan your next activity with your friends or business partners."
  }
];

const Projects = () => {
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map(project => {
        return (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>
              {project.name}
            </Link>
            <h4>{project.technologies}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export { Projects, myProjects };