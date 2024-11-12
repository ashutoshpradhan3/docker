import React, { useState } from 'react';
import '../ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '', phone: '' });
  };

  return (
    <section id='contact' className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Reach out to us for any queries or product inquiries.</p>
        <p><strong>Showroom Location:</strong> Nalanda CP Ceramics, Patna, Bihar</p>
        <p><strong>Phone:</strong> +91-9508930544</p>
        <p><strong>Email:</strong> contact@nalandaceramics.com</p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
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
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
