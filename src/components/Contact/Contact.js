import React, { useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  useEffect(() => {
    emailjs.init('fONJOEzBaKx-2lwsC');
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nxe1iaa', 'contact_form', e.target)
      .then(() => {
        console.log('SUCCESS!');
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="Contact-container">
      <div className="background-glow"></div>

      <div className="Contact-title">
        <h1 className="Contact-title-text">
          Contact
        </h1>
      </div>

      <div className="Contact-main-container">
        <form id="contact-form" onSubmit={handleOnSubmit}>
          <input type="hidden" name="contact_number" />

          <input type="text" name="user_name" />

          <input type="email" name="user_email" />

          <textarea name="message" />

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
