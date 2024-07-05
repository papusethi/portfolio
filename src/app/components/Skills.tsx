import React from 'react';
import {
  LogoCSS,
  LogoFigma,
  LogoGit,
  LogoHTML,
  LogoJavaScript,
  LogoJest,
  LogoJira,
  LogoMongoDB,
  LogoNextJS,
  LogoNodeJS,
  LogoReact,
  LogoRedux
} from '../assets/img';

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favorite skills</span>

      <div className="skills__container container grid section__border">
        {/* ==================== SKILLS 1 ==================== */}
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-braces-line" /> Advanced Proficiency Technologies
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoHTML} alt="HTML Logo" />
              </div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoCSS} alt="CSS Logo" />
              </div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoJavaScript} alt="JavaScript Logo" />
              </div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoReact} alt="React Logo" />
              </div>
              <h3 className="skills__name">React</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoRedux} alt="Redux Logo" />
              </div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoJest} alt="Jest Logo" />
              </div>
              <h3 className="skills__name">Jest</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>
          </div>
        </div>

        {/* ==================== SKILLS 2 ==================== */}
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-pantone-line" /> Intermediate Proficiency Technologies
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoNodeJS} alt="Node.js Logo" />
              </div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoGit} alt="Git Logo" />
              </div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoNextJS} alt="Next.js Logo" />
              </div>
              <h3 className="skills__name">Next.js</h3>
              <span className="skills__subtitle">Basic</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoMongoDB} alt="MongoDB Logo" />
              </div>
              <h3 className="skills__name">Mongo DB</h3>
              <span className="skills__subtitle">Basic</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoJira} alt="Jira Logo" />
              </div>
              <h3 className="skills__name">Jira</h3>
              <span className="skills__subtitle">Basic</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={LogoFigma} alt="Figma Logo" />
              </div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__subtitle">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
