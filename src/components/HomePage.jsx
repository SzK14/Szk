import React from 'react';
import { Helmet } from 'react-helmet';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Sebastian Garcia - Portfolio</title>
        <meta name="description" content="Sebastian Garcia's portfolio showcasing skills in frontend, mobile, and game development." />
        <meta name="keywords" content="Sebastian Garcia, frontend developer, mobile developer, game developer, portfolio, ui/ux design, SEO, google Ads, social media, game development, unity2d, unity3d." />
        <meta name="author" content="Sebastian Garcia" />
        <meta property="og:title" content="Sebastian Garcia - Portfolio" />
        <meta property="og:description" content="Sebastian Garcia's portfolio showcasing skills in frontend, mobile, and game development." />
        <meta property="og:image" content="/src/assets/Main.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* 🔥 HERO SECTION */}
      <section className="hero-section">
        <div className="cover-image">
          <div className="fog-effect">
            <h1 className="title animated-title">
              Sebastian <span className="gradient-text">Garcia</span>
            </h1>
            <p className="subtitle animated-text">Frontend || Mobile || Games</p>
            <p className="role animated-text">Developer</p>
          </div>
        </div>
      </section>

 
      {/* 🙋‍♂️ PROFILE SECTION */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-info">
            <p className="typewriter-text">
              I am a <span className="highlight">software developer</span> passionate and curious about creating 
              innovative and efficient solutions. I enjoy transforming ideas into functional 
              and attractive web applications. My goal is to continue learning and growing in 
              the field of software development, contributing to projects that make a difference.
            </p>
          </div>
          <a href="/about" className="btn">About</a>
        </div>
      </section>

      {/* 🛠️ SKILLS SECTION */}
      <section className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">The skills, tools, and technologies I use:</p>

        <div className="skills-bento">
          <div className="skills-box">
            <h3>Web Development</h3>
            <img src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,tailwind,vite,wordpress" alt="Web Skills" />
          </div>

          <div className="skills-box">
            <h3>Mobile Development</h3>
            <img src="https://skillicons.dev/icons?i=swift,kotlin" alt="Mobile Skills" />
          </div>

          <div className="skills-box">
            <h3>Game Development</h3>
            <img src="https://skillicons.dev/icons?i=unity,cs,unreal,cpp" alt="Game Skills" />
          </div>

          <div className="skills-box">
            <h3>Tools</h3>
            <img src="https://skillicons.dev/icons?i=git,github,figma,vscode" alt="Tools" />
          </div>
        </div>
      </section>

      {/* 🚀 PROJECTS SECTION */}
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/cover.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="more-button">More</a>
                </div>
              </div>
              <h3>Abyssal Ascent</h3>
              <p>2D Sidescroller Game made on Unity</p>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/pool.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="more-button">More</a>
                </div>
              </div>
              <h3>Mountain Pool & Spa</h3>
              <p>Webseite for a Pools Company</p>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/src/assets/GameLogo.png" alt="Game" className="projects-img" />
                <div className="hover-overlay">
                  <a href="#projects" className="more-button">More</a>
                </div>
              </div>
              <h3>Project Name</h3>
              <p>Project Description</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
