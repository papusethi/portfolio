import React from 'react';
import { ShapeCircle } from '../assets/img';

const Qualification: React.FC = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Experience &amp; education</span>

      <div className="qualification__container container grid section__border">
        {/* ==================== QUALIFICATION 1 ==================== */}
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-pencil-ruler-2-line" /> Education
          </h3>

          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Computer Science</h3>
              <span className="qualification__country">Biju Patnaik University - Odisha, India</span>
              <span className="qualification__year">Aug 2018 - Aug 2022</span>
            </div>
          </div>
        </div>

        {/* ==================== QUALIFICATION 2 ==================== */}
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-building-line" /> Work
          </h3>

          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Software Engineer</h3>
              <span className="qualification__country">Divami Design Labs - Hyderabad, India</span>
              <span className="qualification__year">Jul 2022 - Current</span>
            </div>

            <div>
              <h3 className="qualification__name">Software Engineer Intern</h3>
              <span className="qualification__country">Divami Design Labs - Hyderabad, India</span>
              <span className="qualification__year">Feb 2022 - Jun 2022</span>
            </div>
          </div>
        </div>
      </div>

      <img src={ShapeCircle} alt="" className="qualification__img" />
    </section>
  );
};

export default Qualification;
