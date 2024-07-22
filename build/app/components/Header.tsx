import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState('light');

  // On component mount, check if there's a previously selected theme.
  useEffect(() => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);

  // Add/remove dark-theme class based on current theme state.
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;

      // Add a class if the bottom offset is greater than 50 of the viewport.
      if (scrollDown >= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Find all sections with an id attribute
      const sections = document.querySelectorAll('section[id]');

      // Determine which section is currently active
      sections.forEach((current) => {
        const sectionId = current.getAttribute('id');
        const sectionTop = current?.offsetTop - 58;
        const sectionHeight = current?.offsetHeight;

        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass?.classList.add('active-link');
        } else {
          sectionsClass?.classList.remove('active-link');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run on mount and unmount

  // Function to toggle theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('selected-theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('selected-theme', 'light');
    }
  };

  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

  /* Menu show */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu?.classList.add('show-menu');
    });
  }

  /* Menu hidden */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu?.classList.remove('show-menu');
    });
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link');

  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu?.classList.remove('show-menu');
  };
  navLink.forEach((n) => n.addEventListener('click', linkAction));

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

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="ri-briefcase-line" /> Services
              </a>
            </li> */}

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
          {theme === 'dark' ? (
            <i className="ri-moon-line change-theme" id="theme-button" onClick={toggleTheme} />
          ) : (
            <i className="ri-sun-line change-theme" id="theme-button" onClick={toggleTheme} />
          )}

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
