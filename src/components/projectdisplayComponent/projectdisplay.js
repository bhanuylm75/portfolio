import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../data/projectlist";
import {motion} from "framer-motion"
import Fade from 'react-reveal/Fade';
import "./index.css"

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <>
      <h1 className="title"> {project.name}</h1>
      <div className="project">
        <div className="pro-inner">
          <Fade left><img   className="pro-img" alt={project.name} src={project.image} /></Fade>
        </div>
        <Fade right>
        <div className="data">
          <p>
            Techonologies Used: 
            <span>{project.skills}</span>
          </p>
           <a className="a"  href={project.link} target="_blank" rel="noreferrer">WebsiteLink:{project.name}</a>
           <p3>⚡{project.des}</p3>
        </div>
        </Fade>
      </div>
    </>
  );
}

export default ProjectDisplay;
