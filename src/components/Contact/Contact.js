import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Contact.css';
import swal from 'sweetalert';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitVisible, setIsSubmitVisible] = useState(false);

  const submitButtonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.Contact-title-text', { opacity: 0, y: 150 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });

    if (isSubmitVisible) {
      gsap.from(submitButtonRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      });
    }
  }, [isSubmitVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'user_name') setName(value);
    if (name === 'user_email') setEmail(value);
    if (name === 'message') setMessage(value);

    if (name && email && message) {
      setIsSubmitVisible(true);
    } else {
      setIsSubmitVisible(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formspree endpoint for your form
    const endpoint = 'https://formspree.io/f/your-form-id';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        swal("Goed gedaan!", "Bericht succesvol verzonden!", "success");
      } else {
        swal("Helaas!", "Het verzenden van het bericht is mislukt. Probeer het later opnieuw.", "error");
      }
    } catch (error) {
      console.error('Fout bij het verzenden van het bericht:', error);
      swal("Helaas!", "Er is een fout opgetreden tijdens het verzenden van het bericht. Probeer het later opnieuw.", "error");
    }
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
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New submission from your website!" />
          <input type="hidden" name="_next" value="https://your-website.com/thank-you" />

          <input type="text" name="user_name" placeholder='Name' value={name} onChange={handleInputChange} />

          <input type="email" name="user_email" placeholder='Email' value={email} onChange={handleInputChange} />

          <textarea name="message" placeholder='Your Message' value={message} onChange={handleInputChange} />

          {isSubmitVisible && <input ref={submitButtonRef} type="submit" value="Send" />}
        </form>
      </div>
    </div>
  );
}

export default Contact;
