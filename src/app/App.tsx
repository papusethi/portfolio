import React, { Fragment } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* ========== SCROLL UP ========== */}
      <ScrollToTop />
    </Fragment>
  );
};

export default App;
