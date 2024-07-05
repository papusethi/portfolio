import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHeaderBg = () => {
    // Add a class if the bottom offset is greater than 50 of the viewport.
    if (window.scrollY >= 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleHeaderBg);

  return (
    <header className={`header ${isVisible && 'bg-header'}`} id="header">
      <nav className="nav container">
        <a href="/#" className="nav__logo">
          Papu Sethi
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="ri-home-5-line" /> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="ri-trophy-line" /> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="ri-book-open-line" /> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="ri-briefcase-line" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="ri-image-line" /> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="ri-chat-3-line" /> Contact
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-line" />
          </div>
        </div>

        <div className="nav__buttons">
          {/* Theme change button */}
          <i className="ri-moon-line change-theme" id="theme-button" />

          {/* Toggle button */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-4-line" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
