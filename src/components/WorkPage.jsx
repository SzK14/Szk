import React from 'react';
import './WorkPage.css';

const WorkPage = () => {
  return (
    <div className="work-page">
      <h1>Projects</h1>
      <div className="project-container">
        {/* Proyecto 1 */}
        <div className="project">
          <div className="project-left">
            <div className="cover-image">
              <img src="/src/assets/GameLogo.png" alt="Seb" />
            </div>
            <div className="tools">
              <img src="https://skillicons.dev/icons?i=unity" alt="Unity" />
              <img src="https://skillicons.dev/icons?i=cs" alt="C#" />
            </div>
          </div>
          <div className="project-right">
            <h2>Abyssal Ascent</h2>
            <p className="description">
              Abyssal Ascent is a 2D platform game with a unique and dark premise. Players take on the role of an ambitious businessman who,
              after signing a mysterious contract with a stranger who turns out to be Lucifer, falls into an abyss into the underworld. 
              Discovering that he has sold his soul, the player finds themselves trapped in Lucifer's realm, 
              forced to ascend through the circles of hell in an attempt to regain their freedom.
            </p>
            <div className="code">
              <h4>Code</h4>
              <pre>
                <code>
                  {/* Aquí va tu código de ejemplo */}
                  console.log("Hello, World!");
                </code>
              </pre>
            </div>
          </div>
        </div>
         {/* Project 2 */}
         <div className="project">
          <div className="project-left">
            <div className="cover-image">
              <img src="/src/assets/pool.png" alt="Seb" />
            </div>
            <div className="tools">
              <img src="https://skillicons.dev/icons?i=wordpress" alt="Unity" />
              <img src="https://skillicons.dev/icons?i=html" alt="C#" />
              <img src="https://skillicons.dev/icons?i=css" alt="C#" />
            </div>
          </div>
          <div className="project-right">
            <h2>Mountain Pool & Spa </h2>
            <p className="description">
              Abyssal Ascent is a 2D platform game with a unique and dark premise. Players take on the role of an ambitious businessman who,
              after signing a mysterious contract with a stranger who turns out to be Lucifer, falls into an abyss into the underworld. 
              Discovering that he has sold his soul, the player finds themselves trapped in Lucifer's realm, 
              forced to ascend through the circles of hell in an attempt to regain their freedom.
            </p>
            <div className="code">
              <h4>Code</h4>
              <pre>
                <code>
                  {/* Aquí va tu código de ejemplo */}
                  console.log("Hello, World!");
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;