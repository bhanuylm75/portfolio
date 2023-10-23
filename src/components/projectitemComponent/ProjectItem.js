import React from "react";
import "./index.css"
import {motion} from "framer-motion"

function ProjectItem({ image, name, link,git }) {
  const navigate = ()=>{
    window.open(git);

  }
  const anchor = ()=>{
    window.open(link);

  }
  return (
    <div
      className="projectItem"
      onClick={navigate}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <a className="a" href={link} target="_blank" rel="noreferrer" onClick={anchor}>LINK:{name}  </a>
    </div>
  );
}

export default ProjectItem;
