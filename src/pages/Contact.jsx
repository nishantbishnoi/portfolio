// src/pages/Contact.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uozlxng',
      'template_fn7h7tm',
      form.current,
      'F8vBRZi4WgXNLPpHo'
    ).then(
      (result) => {
        alert('Message Sent Successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message, please try again.');
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box"><i className="fas fa-phone"></i><span>+91 8302791727</span></div>
          <div className="info-box"><i className="fas fa-envelope"></i><span>nishantbishnoi1200@gmail.com</span></div>
          <div className="info-box"><i className="fas fa-map-marker-alt"></i><span>Punjab, India</span></div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
