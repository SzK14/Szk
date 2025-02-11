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
     
    </div>
  );
};

export default AboutPage;
