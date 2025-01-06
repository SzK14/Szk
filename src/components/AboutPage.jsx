import React from 'react';
import './AboutPage.css';
import 'font-awesome/css/font-awesome.min.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="profile-info">
        <h1 class="focus-in-expand">Sebastian Garcia</h1>
        <p>Software Developer</p>
        <p className="bio">
          Hi, I'm Sebastian, a passionate software developer and designer with a focus on creating user-friendly digital experiences. 
          I specialize in web development, mobile applications and game development, combining creativity and technical expertise to build innovative solutions.
        </p>
        <div className="social-links">
          <a href="https://github.com/SzK14" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sebastian-garcia-dev" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:sebaatianj16@gmail.com" className="social-link">
            <i className="fa fa-envelope"></i> Email
          </a>
        </div>
      </div>
      <img src="/src/assets/Main.jpg" alt="Seb" className="profile-image"/>
     
      {/* ------Skills Section-------  */}
      <div className="skills-section">
        <h2>Skills</h2>
        <p>The skills, tools, and technologies I use:</p>
        
        <div class="Web Development">
          <h3>Web & Mobile</h3>
          <p align="center">
            
            <img src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,astro,nodejs,tailwind,ts,vite,wordpress,swift,kotlin" />
            
          </p>
        </div>
        <div class="Game Development">
          <h3>Game Development</h3>
          <img src="https://skillicons.dev/icons?i=unity,cs,unreal,cpp" />
        </div>
          <h3>Tools</h3>
          <img src="https://skillicons.dev/icons?i=figma,notion,vscode,visualstudio,git,github" />
        <div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
