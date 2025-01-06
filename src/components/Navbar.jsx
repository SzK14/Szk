import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
      <Link to="/" className="navbar-item ">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/about" className="navbar-item about-btn">
          <i className="fa fa-user"></i> About
        </Link>
        <Link to="/work" className="navbar-item">
          <i className="fa fa-briefcase"></i> Work
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
