import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="profile-container">
      
        <div className="profile-info">
          <h1>Software Developer</h1>
          
          <p className="bio">
            Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions.
          </p>
        </div>
      </div>

      <div className="navigation">
        <a href="#about" className="about-btn">About</a>
      </div>
    </div>
  );
};

export default HomePage;
