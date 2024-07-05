import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Papu Sethi</h1>
        <p>Frontend Developer</p>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <li>
            <a
              href="https://www.linkedin.com/in/papusethi"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="ri-linkedin-box-line" />
            </a>
          </li>
          <li>
            <a href="https://github.com/papusethi" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className="ri-github-line" />
            </a>
          </li>
        </ul>

        <span className="footer__copy">&copy; Copyright Papu. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
