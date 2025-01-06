import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="cover-image">
        <div className="fog-effect">
          <h1>Software Developer</h1>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-info">
          <p className="bio">
            Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions.
          </p>
          <a href="/about" className="btn">About</a>
        </div>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <h2>Tools</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>GitHub</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
