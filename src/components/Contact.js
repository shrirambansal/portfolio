// src/pages/Contact.js

import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactSection = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
  color: #2c3e50;
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  input, textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  input[type="submit"] {
    background-color: #3498db;
    color: white;
    cursor: pointer;
    border: none;
    padding: 15px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
  }

  input[type="submit"]:hover {
    background-color: #2980b9;
  }

  .form-feedback {
    text-align: center;
    margin-top: 20px;
    color: green;
  }
  
  @media (max-width: 768px) {
    .contact-form {
      padding: 15px;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Form validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback('Please fill in all fields before submitting.');
      return;
    }
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
  
    // Send the email via EmailJS
    emailjs
      .send('service_atvl0dr', 'template_psxeks8', templateParams, '74dITH_7Z4bwiduSQ')
      .then(
        (response) => {
          // Show success message
          setFeedback('Thank you for getting in touch! I will get back to you shortly.');
  
          // Reset form data
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          // Show error message
          setFeedback('Error: ' + error.text);
        }
      );
  };

  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
        <input type="submit" value="Send Message" />
      </form>

      {feedback && <div className="form-feedback">{feedback}</div>}
    </ContactSection>
  );
};

export default Contact;
