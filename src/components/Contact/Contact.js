import React from 'react';
import './Contact.css';

function Contact() {

  return (
    <div className="Contact-container">
      <div className="background-glow"></div>

      <div className="Contact-title">
        <h1 className="Contact-title-text">
          Contact
        </h1>
      </div>

      <div className="Contact-main-container">
        <form id="contact-form">
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
