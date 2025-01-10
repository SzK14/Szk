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
            I am a software developer passionate about creating innovative and efficient solutions. 
            With experience in JavaScript, React, CSS, and HTML, 
            I enjoy transforming ideas into functional and attractive web applications.
             My goal is to continue learning and growing in the field of software development, 
             contributing to projects that make a difference.
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
      <div className="projects-container">
        <div className="projects-grid">
          <div className="project-item">
            <img src="/src/assets/GameLogo.png" alt="Game" class="ProjectsImg"/>
            <h3>Abyssal Ascent</h3>
            <p>2D Sidescroller Game made on Unity</p>
          </div>
          <div className="project-item">
            <img src="/src/assets/GameLogo.png" alt="Game" class="ProjectsImg"/>
            <h3>Stick Dots</h3>
            <p>2D Sidescroller Game made on Unity</p>
          </div>
          <div className="project-item">
            <img src="/src/assets/GameLogo.png" alt="Game" class="ProjectsImg"/>
            <h3>Mountain Pool & Spa</h3>
            <p>2D Sidescroller Game made on Unity</p>
          </div>
          <div className="project-item">
            <img src="/src/assets/GameLogo.png" alt="Game" class="ProjectsImg"/>
            <h3>SkyTrain Surfers</h3>
            <p>2D Sidescroller Game made on Unity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
