import React from 'react';
import { ThumbnailProjectOne } from '../assets/img';

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
                Implemented solutions to eﬀiciently handle large datasets and concurrent operations, ensuring optimal
                performance and user experience under varying workloads.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
