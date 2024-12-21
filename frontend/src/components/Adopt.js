import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Adopt.css'; // Import Adopt-specific CSS
import logo from '../Images/logo.jpg'; // Import the logo image

const Adopt = () => {
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
              <li className="nav-item"><Link className="nav-link text-white active" to="/adopt">Adopt</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Adopt Form Section */}
      <div className="container form-section">
        <h1 className="text-center">Adopt A Pet</h1>
        <p className="text-center">
          Fill out the form below to submit your adoption application. Once a member of staff has reviewed your application, you will be contacted to meet your pet and complete the adoption process.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="petSelect" className="form-label">Pet</label>
            <select className="form-select" id="petSelect">
              <option selected>Select the pet you want to adopt</option>
              <option value="Bailey">Bailey</option>
              <option value="Tiger">Tiger</option>
              <option value="Fluffy">Fluffy</option>
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="First Last" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Phone number</label>
              <input type="tel" className="form-control" id="phone" placeholder="+973 xxxxxxxx" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="name@email.com" />
            <small>
              Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link>
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control mb-2" id="addressLine1" placeholder="Address Line 1" />
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control" id="city" placeholder="City" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="postalCode" placeholder="Postal / ZIP code" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-submit px-4">Submit Application</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adopt;
