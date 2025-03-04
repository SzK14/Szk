import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Menú para pantallas grandes */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/work" className="nav-item">Work</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
