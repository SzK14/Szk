import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="cover-image">
        <div className="fog-effect">
          <h1 className="title animated-title">Sebastian Garcia</h1>
          <p className="subtitle animated-text">Web / Mobile / Games</p>
          <p className="role animated-text">Developer</p>

        </div>
      </div>
      <div className="profile-container">
        <div className="profile-info">
          <p className="typewriter-text">
            I am a software developer passionate and courius about creating innovative and efficient solutions. 
            I enjoy transforming ideas into functional and attractive web applications.
             My goal is to continue learning and growing in the field of software development, 
             contributing to projects that make a difference.
          </p>
          <a href="/about" className="btn">About</a>
        </div>
      </div>
    
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/GameLogo.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="about-button">About</a>
                </div>
              </div>
              <h3>Abyssal Ascent</h3>
              <p>2D Sidescroller Game made on Unity</p>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/GameLogo.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="about-button">About</a>
                </div>
              </div>
              <h3>Stick Dots</h3>
              <p>Connect lines to make a path for the dots to follow made on Unity</p>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/GameLogo.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="about-button">About</a>
                </div>
              </div>
              <h3>Mountain Pool & Spa</h3>
              <p>Website for a business</p>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/GameLogo.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="about-button">About</a>
                </div>
              </div>
              <h3>SkyTrain Surfers</h3>
              <p>2D Endless Runner Game made on Unity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
