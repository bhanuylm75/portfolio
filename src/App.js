import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbarComponent/Navbar";
import Home from "./components/homeComponent/Home";
//import Footer from "./components/footerComponent/Footer";
import Projects from "./components/projectComponent/Project";
import ProjectDisplay from "./components/projectdisplayComponent/projectdisplay";
import Experience from "./components/experienceComponent/Eperience";

import {motion} from "framer-motion"



function App() {
  return (
    <motion.div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </motion.div>
  );
}

export default App;
