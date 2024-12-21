import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './ContactUs.css'; // Import ContactUs-specific styles
import logo from '../Images/logo.jpg'; // Import the logo image

const ContactUs = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1675d3' }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
            <div className="d-flex flex-column">
              <span className="text-white fw-bold" style={{ fontSize: '1.25rem' }}>Hope Sanctuary</span>
              <span className="text-white" style={{ fontSize: '0.9rem' }}>Adoption Center</span>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/pets">Pets</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/adopt">Adopt</Link></li>
              <li className="nav-item"><Link className="nav-link text-white active" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
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
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
