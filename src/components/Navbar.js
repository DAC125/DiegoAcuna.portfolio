import React, { useState } from "react";
import "./../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToSection = (sectionId) => {
    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop,
      behavior: "smooth",
    });
    if (click){
      handleClick();
    }
  };
  return (
    <div className="header">
      <li onClick={() => scrollToSection("home")} className="nav-logo">
        Portfolio
      </li>
      <ul className={click? "nav-menu active" : "nav-menu"}>
        <li onClick={() => scrollToSection("home")} className="link">
          Home
        </li>
        <li onClick={() => scrollToSection("about")} className="link">
          About
        </li>
        <li onClick={() => scrollToSection("skills")} className="link">
          Skils
        </li>
        <li onClick={() => scrollToSection("project")} className="link">
          Projects
        </li>
        <li onClick={() => scrollToSection("contact")} className="link">
          Contact
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {!click ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
