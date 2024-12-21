import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; 
import logo from '../Images/logo.jpg'; 
import pet1 from '../Images/8.jpg';
import pet2 from '../Images/9.jpg';
import welcomeImg from '../Images/10.jpg';

const Home = () => {
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
              <li className="nav-item"><Link className="nav-link text-white active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/pets">Pets</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/adopt">Adopt</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="light-blue-background">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <h1 style={{ color: '#030404' }}>Adopt A Cute Pet</h1>
              <p>Find your furry friend today!</p>
              <form className="d-flex justify-content-center mb-4">
                <input
                  className="form-control me-2 w-50 search-bar"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-search" type="submit">Search</button>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img src={welcomeImg} alt="Welcome Image" className="img-fluid rounded shadow" style={{ maxHeight: '350px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={pet1} alt="Pet 1" className="img-fluid rounded shadow fixed-size-img" />
          </div>
          <div className="col-md-6 text-center">
            <img src={pet2} alt="Pet 2" className="img-fluid rounded shadow fixed-size-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
