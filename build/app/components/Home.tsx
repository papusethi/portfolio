import React from 'react';
import { ShapeCircle, ShapeWawes } from '../assets/img';
import ProfilePicture from '../assets/img/papusethi-profile.png';

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Hi, I am Papu <br />
            Frontend Developer <br />
            Based In India <br />
          </h1>

          <div className="home__blob grid">
            <div className="home__prefil">
              <img src={ProfilePicture} alt="Home Prefil" />
            </div>
            <img src={ShapeWawes} alt="" className="home__shape-wawes" />
            <img src={ShapeCircle} alt="" className="home__shape-circle" />
          </div>

          <ul className="home__social">
            <li>
              <a
                href="https://www.linkedin.com/in/papusethi"
                target="_blank"
                rel="noreferrer"
                className="home__social-link"
              >
                <i className="ri-linkedin-box-line" />
              </a>
            </li>
            <li>
              <a href="https://github.com/papusethi" target="_blank" rel="noreferrer" className="home__social-link">
                <i className="ri-github-line" />
              </a>
            </li>
          </ul>
        </div>

        {/* ==================== HOME INFO 1 ==================== */}
        <div className="home__info">
          <div>
            <h3 className="home__info-title">BIOGRAPHY</h3>
            <p className="home__info-description">
              Hi, I am Papu, Frontend Developer. Passionate about developing beautiful web apps with best practices.
            </p>
          </div>

          <div>
            <h3 className="home__info-title">CONTACT</h3>
            <p className="home__info-description">
              mrpapusethi@gmail.com <br />
              +91 8480874728 <br />
            </p>
          </div>

          <div>
            <h3 className="home__info-title">SERVICES</h3>
            <p className="home__info-description">
              Website Design <br />
              Web Application <br />
              Animation <br />
            </p>
          </div>
        </div>

        {/* ==================== HOME INFO 2 ==================== */}
        <div className="home__info">
          <div>
            <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>
            <p className="home__info-number">02+</p>
          </div>
          <div>
            <h3 className="home__info-title">COMPLETED PROJECTS</h3>
            <p className="home__info-number">04+</p>
          </div>
          <div>
            <h3 className="home__info-title">COMPANIES WORKED</h3>
            <p className="home__info-number">01</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
