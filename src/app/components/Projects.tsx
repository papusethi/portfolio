import React from 'react';
import { ThumbnailProjectFour, ThumbnailProjectOne, ThumbnailProjectThree, ThumbnailProjectTwo } from '../assets/img';

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="projects__container container grid section__border">
        {/* ==================== PROJECTS 1 ==================== */}
        <div className="projects__content swiper-slide">
          <img src={ThumbnailProjectOne} alt="project" className="projects__img" />
          <div>
            <span className="projects__subtitle">Web</span>
            <h1 className="projects__title">Modern Website</h1>
            <a href="/#" className="projects__button">
              View Demo <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

        {/* ==================== PROJECTS 2 ==================== */}
        <div className="projects__content swiper-slide">
          <img src={ThumbnailProjectTwo} alt="project" className="projects__img" />
          <div>
            <span className="projects__subtitle">Web</span>
            <h1 className="projects__title">ECommerce Store</h1>
            <a href="/#" className="projects__button">
              View Demo <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

        {/* ==================== PROJECTS 3 ==================== */}
        <div className="projects__content swiper-slide">
          <img src={ThumbnailProjectThree} alt="project" className="projects__img" />
          <div>
            <span className="projects__subtitle">Design</span>
            <h1 className="projects__title">Application Design</h1>
            <a href="/#" className="projects__button">
              View Demo <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

        {/* ==================== PROJECTS 4 ==================== */}
        <div className="projects__content swiper-slide">
          <img src={ThumbnailProjectFour} alt="project" className="projects__img" />
          <div>
            <span className="projects__subtitle">Animation</span>
            <h1 className="projects__title">Animation Prototypes</h1>
            <a href="/#" className="projects__button">
              View Demo <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
