import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import html from "../../assets/icons8-html-5-48.png"
import react from "../../assets/icons8-react-40.png"
import nodejs from "../../assets/node-js.png"
import javascript from "../../assets/icons8-javascript-48.png"
import css from "../../assets/icons8-css3-48.png"
import {motion} from "framer-motion"
import svg from "./svg.svg"
import Fade from 'react-reveal/Fade';
import PhoneIcon from '@mui/icons-material/Phone';


import "./index.css"

function Home() {
  return (
    <div className="home">
      <motion.div className="about" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2}}>
        <h1> Hi, My Name is  Bhanu Chandra</h1>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a classNmae="li" href="https://www.linkedin.com/in/bhanu-chandra-danda-122a09193/">  <LinkedInIcon /></a>
         <a classNmae="li" href="mailto:bhanuylm01@gmail.com"> <EmailIcon /></a>
         <a classNmae="li" href={`tel:${7989846283}`}> <PhoneIcon /></a>
         <motion.a  whileHover={{ scale: 1.2 }} clssNmae="li" target="_blank" href="https://github.com/bhanuylm75" rel="noreferrer"> <GithubIcon /></motion.a>
        </div>
      </motion.div>
      <h1 className="main-head"> What I Do ?</h1>
      <div className="main">
      <Fade left><img src={svg} alt="p" className="img"/></Fade>
      <Fade right>
      <div className="icons-main">
        <h1 className="full">Full Stack Development</h1>
      <div className="icons">
      <img src={html} alt="p" className="icon"/>
      <img src={css} alt="p" className="icon"/>
      <img src={javascript} alt="p" className="icon"/>
      <img src={react} alt="p" className="icon"/>
      <img src={nodejs} alt="p" className="icon"/>
      </div>
      <p className="para"> ⚡ Building resposive website front end using React-Redux</p>
      <p className="para">⚡ Creating application backend in Node & Express </p>
      </div>
      </Fade>
      </div>
    </div>
  );
}

export default Home;