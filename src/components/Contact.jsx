import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      alert("Form submitted successfully!");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-container">
      {/* 📌 Sección izquierda */}
      <div className="contact-info">
        <h2>Contact</h2>
        <p>What can I do for you?</p>
      </div>

      {/* 📌 Sección derecha - Formulario */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="input-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Service Needed *</label>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="web">Web Design & Development</option>
            <option value="mobile">Mobile Apps</option>
            <option value="seo">SEO & Google Ads</option>
            <option value="game">Game Development</option>
            <option value="uiux">UI/UX Design</option>
          </select>
          {errors.service && <span className="error">{errors.service}</span>}
        </div>

        <div className="input-group">
          <label>Meeting Date *</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="input-group">
          <label>Meeting Time *</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        <div className="input-group">
          <label>Additional Details (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any extra details?"
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
