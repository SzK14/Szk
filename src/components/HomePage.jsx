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
          I am a <span className="highlight">software developer</span> passionate and curious about creating 
      innovative and efficient solutions. I enjoy transforming ideas into functional 
      and attractive web applications. My goal is to continue <span className="highlight">learning</span> 
      and growing in the field of software development, contributing to projects that make a difference.
          </p>
          <a href="/about" className="btn">About</a>
        </div>
      </div>
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">The skills, tools, and technologies I use:</p>

        <div className="skills-bento">
          <div className="skills-box">
            <h3>Web Development</h3>
            <img src="https://skillicons.dev/icons?i=html,css,js,react,nextjs" alt="Web Development Skills" />
            <img src="https://skillicons.dev/icons?i=tailwind,vite,vue,ts,astro,nodejs,wordpress" alt="Web Development Skills" />
            
          </div>

          <div className="skills-box">
            <h3>Mobile Development</h3>
            <img src="https://skillicons.dev/icons?i=swift,kotlin" alt="Mobile Development Skills" />
          </div>

          <div className="skills-box">
            <h3>Game Development</h3>
            <img src="https://skillicons.dev/icons?i=unity,cs" alt="Game Development Skills" />
            <img src="https://skillicons.dev/icons?i=unreal,cpp" alt="Game Development Skills" />
          </div>

          <div className="skills-box">
            <h3>Tools</h3>
            <img src="https://skillicons.dev/icons?i=figma,xd,notion,vscode" alt="Tools" />
            <img src="https://skillicons.dev/icons?i=visualstudio,git,github,vercel" alt="Tools" />
          </div>
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
