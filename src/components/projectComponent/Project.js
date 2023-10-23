import React from "react";
import ProjectItem from "../projectitemComponent/ProjectItem";
import { ProjectList } from "../../data/projectlist";
import "./index.css"

//import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} git={project.git} image={project.image} link={project.link} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
