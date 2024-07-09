import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Competencies</h2>
      <span className="section__subtitle">My core strengths</span>

      <div className="services__container container grid section__border">
        <div className="services__card">
          <i className="ri-layout-4-line" />
          <h2 className="services__title">
            Process <br />
            Oriented
          </h2>
          <p className="services__description">
            Prioritize structured workflows and systematic approaches to optimize efficiency and achieve consistent
            results in project.
          </p>
          <div className="services__border" />
        </div>

        <div className="services__card">
          <i className="ri-code-line" />
          <h2 className="services__title">
            Meets <br />
            Standards
          </h2>
          <p className="services__description">
            Adhere to industry best practices and established guidelines to maintain consistency, compatibility, and
            reliability in projects.
          </p>
          <div className="services__border" />
        </div>

        <div className="services__card">
          <i className="ri-quill-pen-line" />
          <h2 className="services__title">
            Delivers <br />
            Quality
          </h2>
          <p className="services__description">
            Ensure user satisfaction by emphasizing thorough testing, attention to detail, and continuous improvement in
            project.
          </p>
          <div className="services__border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
