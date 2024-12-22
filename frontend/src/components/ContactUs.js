import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './ContactUs.css'; // Import ContactUs-specific styles
import logo from '../Images/logo.jpg'; // Import the logo image
import { submitContactForm } from './API'; // Import submitContactForm function

const ContactUs = ({ user, onLogout }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData);
      setFormMessage('Contact form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setFormMessage('Failed to submit contact form.');
      console.error('Error submitting contact form:', err);
    }
  };

  return (
    <>
      {/* Navbar */}
<nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1675d3' }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
            <div className="d-flex flex-column">
              <span className="text-white fw-bold" style={{ fontSize: '1.25rem' }}>
                Hope Sanctuary
              </span>
              <span className="text-white" style={{ fontSize: '0.9rem' }}>
                Adoption Center
              </span>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/pets">Pets</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/adopt">Adopt</Link></li>
              {/* Conditional Requests link */}
              {user?.role === 'admin' &&(
                <li className="nav-item"><Link className="nav-link text-white" to="/requests">Requests</Link></li>
              )}
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
              {/* Conditional Admin link */}
              {user?.role === 'admin' && (
                <li className="nav-item"><Link className="nav-link text-white" to="/admin">Admin Dashboard</Link></li>
              )}
              {/* Conditional Login/Logout */}
              {user ? (
                <li className="nav-item">
                  <button className="btn nav-link text-white border-0 bg-transparent" onClick={onLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item"><Link className="nav-link text-white active" to="/login">Login</Link></li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="container py-5">
        {/* Header */}
        <div className="container-header">
          <h1 className="fw-bold">Contact</h1>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div>
            <h5>Get in Touch</h5>
            <p>📞 Phone: 1758949</p>
            <p>✉️ Email: hopesanctuary@outlook.com</p>
            <p>📄 Address: Manama, Building 222</p>
          </div>
          <div>
            <h5>Follow Us on Social Media</h5>
            <p>Instagram: hopesanctuary</p>
            <p>TikTok: hopesanctuary</p>
          </div>
          <div>
            <h5>Business Hours</h5>
            <p>Sunday - Thursday: 12pm - 6pm</p>
            <p>Saturday: 12pm - 9pm</p>
            <p>Friday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="fw-bold text-center mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-submit">Submit</button>
            </div>
          </form>
          {formMessage && <p className="text-center mt-3">{formMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default ContactUs;