import React from 'react';
import { ShapeWawes } from '../assets/img';

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="container section__border">
        <div className="testimonial__container swiper">
          <div className="swiper-wrapper">
            {/* ==================== TESTIMONIAL 1 ==================== */}
            <div className="testimonial__content swiper-slide">
              <p className="testimonial__description">
                “Working with Chris is to give a good impression, I carry out my project at a good cost, with excellent
                quality and attention. Great service and recommended.”
              </p>
              <div>
                <h3 className="testimonial__name">Klay Harris</h3>
                <span className="testimonial__subtitle">Client</span>
              </div>
            </div>

            {/* ==================== TESTIMONIAL 2 ==================== */}
            <div className="testimonial__content swiper-slide">
              <p className="testimonial__description">
                “Working with Chris is to give a good impression, I carry out my project at a good cost, with excellent
                quality and attention. Great service and recommended.”
              </p>
              <div>
                <h3 className="testimonial__name">Mary Lens</h3>
                <span className="testimonial__subtitle">Client</span>
              </div>
            </div>

            {/* ==================== TESTIMONIAL 3 ==================== */}
            <div className="testimonial__content swiper-slide">
              <p className="testimonial__description">
                “Working with Chris is to give a good impression, I carry out my project at a good cost, with excellent
                quality and attention. Great service and recommended.”
              </p>
              <div>
                <h3 className="testimonial__name">Anna Chel</h3>
                <span className="testimonial__subtitle">Client</span>
              </div>
            </div>
          </div>

          {/* Swiper prev and next arrows */}
          <div className="swiper-button-prev">
            <i className="ri-arrow-left-s-line" />
          </div>
          <div className="swiper-button-next">
            <i className="ri-arrow-right-s-line" />
          </div>
        </div>
      </div>

      <img src={ShapeWawes} alt="" className="testimonial__img" />
    </section>
  );
};

export default Testimonial;
