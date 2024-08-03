import React from 'react';
import { ThumbnailProjectOne, ThumbnailProjectTwo } from '../assets/img';

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="projects__container container section__border">
        {/* ==================== PROJECTS 1 ==================== */}
        <div className="projects__content">
          <div>
            <img src={ThumbnailProjectOne} alt="project" className="projects__img" />
            <div>
              <span className="projects__subtitle">Web Application</span>
              <h1 className="projects__title">Supply Chain Management</h1>
              <a href="https://blueyonder.com/" className="projects__button" target="_blank" rel="noreferrer">
                Visit site <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
          <div>
            <ul className="projects__description" style={{ listStyleType: 'initial' }}>
              <li>
                A specialized SaaS platform tailored for business planning architects, focusing on advanced Supply Chain
                Management (SCM).
              </li>
              <li>
                Led the development of a comprehensive Supply Chain Management (SCM) SaaS application from inception to
                multiple release cut deployments.
              </li>
              <li>
                Implemented solutions to efficiently handle large datasets and concurrent operations, ensuring optimal
                performance and user experience under varying workloads.
              </li>
              <li>Technologies used: React, TypeScript, Material UI, Jest, Testing Library, Redux Toolkit.</li>
            </ul>
          </div>
        </div>

        {/* ==================== PROJECTS 2 ==================== */}

        <div className="projects__content">
          <div>
            <img src={ThumbnailProjectTwo} alt="project" className="projects__img" />
            <div>
              <span className="projects__subtitle">Web Application</span>
              <h1 className="projects__title">QuikNotes</h1>
              {/* <a href="https://blueyonder.com/" className="projects__button" target="_blank" rel="noreferrer">
                Visit site <i className="ri-arrow-right-line" />
              </a> */}
            </div>
          </div>
          <div>
            <ul className="projects__description" style={{ listStyleType: 'initial' }}>
              <li>
                A powerful SaaS application designed to capture and organize your ideas and thoughts effortlessly. With
                intuitive features for note-taking, you can easily store, manage, and access your insights anytime,
                anywhere.
              </li>
              <li>
                Designed and implemented a Back-end for Front-end (BFF) architecture using Express.js and MongoDB to
                streamline data flow and improve application performance.
              </li>
              <li>
                Developed robust user authentication systems to secure private routes, ensuring a seamless and secure
                user experience. Additionally, created customizable pages tailored to various industry applications,
                enhancing the applications versatility and user engagement.
              </li>
              <li>Technologies used: React, TypeScript, Material UI, Redux Toolkit, Express.js, MongoDB.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
