import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutUs.css'; // Create a separate CSS file for styles
import logo from '../Images/logo.jpg';
import petImage from '../Images/11.jpg';

const AboutUs = ({ user, onLogout }) => {
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
                <li className="nav-item"><Link className="nav-link text-white" to="/requests">Requests</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
                {/* Conditional Admin link */}
                {user?.role === 'admin' && (
                  <li className="nav-item"><Link className="nav-link text-white" to="/admin">Admin Dashboard</Link></li>
                )}
                {/* Conditional Login/Logout */}
                {user ? (
                  <li className="nav-item">
                    <button
                      className="btn nav-link text-white border-0 bg-transparent"
                      onClick={onLogout}
                    >
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

      {/* About Section */}
      <div className="about-section">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
          We are a passionate team dedicated to connecting loving homes with animals in need.
          Our mission is to make the pet adoption process simple, transparent, and rewarding for both adopters and pets.
        </p>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={petImage} alt="Adopt Me Dogs" className="img-fluid pet-image" />
          </div>

          <div className="col-md-6">
            <div className="values-section">
              <div className="row-circles">
                <div className="circle green">
                  Compassion: Every animal deserves a chance at a happy life.
                </div>
                <div className="circle red">
                  Commitment: We're here for you and your pet, even after adoption.
                </div>
              </div>
              <h2 className="fw-bold values-title">Our Values</h2>
              <div className="circle yellow">
                Transparency: We prioritize honesty and clarity in every interaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
