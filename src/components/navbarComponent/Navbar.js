import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import {motion} from "framer-motion"
import "./index.css"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);


  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <motion.button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
          whileTap={{scale: 0.8,rotate: 120 }}
          //transition={{duration:0.3}}
          > <ReorderIcon />
        </motion.button>
      </div>
      <motion.div className="links">
        <Link whileHover={{ scale: 1}} to="/" className="link"> Home </Link>
        <Link className="link" to="/projects"> Projects </Link>
        <Link className="link" to="/experience"> Experience </Link>
      </motion.div>
    </div>
  );
}

export default Navbar;
