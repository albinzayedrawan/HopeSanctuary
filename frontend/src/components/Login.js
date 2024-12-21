import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './Login.css'; // Import Login-specific styles
import logo from '../Images/logo.jpg'; // Import the logo image

const Login = () => {
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
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white active" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <div className="mb-3 form-text">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="mt-3 form-text">
            Don't have an account? <Link to="/signup">Sign Up</Link> {/* Updated Sign Up link */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
