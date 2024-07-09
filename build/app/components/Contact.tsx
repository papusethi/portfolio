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
            <div className="contact__data">
              <span className="contact__data-title">Whatsapp</span>
              <span className="contact__data-info">+91 7016928866</span>
              <a
                href="https://api.whatsapp.com/send?phone=519876543210&text=Hello, more information!"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Write me <i className="ri-arrow-right-line" />
              </a>
            </div>
            <div className="contact__data">
              <span className="contact__data-title">Messenger</span>
              <span className="contact__data-info">@papu.fb123</span>
              <a href="https://m.me/bedimcode" className="contact__button" target="_blank" rel="noreferrer">
                Write me <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            <i className="ri-send-plane-line" /> Write me your project
          </h3>

          <form action="" className="contact__form" id="contact-form">
            <div className="contact__form-div">
              <label htmlFor="contact-name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="user_name"
                placeholder="Write your name"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="contact-email" className="contact__form-tag">
                Mail
              </label>
              <input
                type="text"
                id="contact-email"
                name="user_email"
                placeholder="Write your email"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="contact-project" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="user_project"
                id="contact-project"
                className="contact__form-input"
                placeholder="Write your project"
              />
            </div>
            <p className="contact__message" id="contact-message">
              Message
            </p>
            <button type="submit" className="contact__button">
              Submit <i className="ri-arrow-right-up-line" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
