import React, { useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (window.scrollY >= 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <a href="#home" className={`scrollup ${isVisible && 'show-scroll'}`} id="scroll-up">
      <i className="ri-arrow-up-line" />
    </a>
  );
};

export default ScrollToTop;
