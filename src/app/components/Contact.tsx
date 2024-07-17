import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <i className="ri-chat-3-line" /> Talk to me
          </h3>
          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-info">mrpapusethi@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            <i className="ri-send-plane-line" /> Follow me
          </h3>
          <div className="contact__data">
            <span className="contact__data-title">Whatsapp</span>
            <span className="contact__data-info">+91 7016928866</span>
            <a
              href="https://api.whatsapp.com/send?phone=+917016928866&text=Hello, more information!"
              className="contact__button"
              target="_blank"
              rel="noreferrer"
            >
              Write me <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
