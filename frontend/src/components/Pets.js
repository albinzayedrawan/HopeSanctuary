import React from "react";
import { Link } from "react-router-dom";
import "./Pets.css"; // Custom CSS for pets page
import logo from "../Images/logo.jpg"; // Logo image
import pet1 from "../Images/1.jpg";
import pet2 from "../Images/2.jpg";
import pet3 from "../Images/8.jpg";

const Pets = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1675d3" }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
            <div className="d-flex flex-column">
              <span className="text-white fw-bold" style={{ fontSize: "1.25rem" }}>Hope Sanctuary</span>
              <span className="text-white" style={{ fontSize: "0.9rem" }}>Adoption Center</span>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white active" to="/pets">Pets</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/adopt">Adopt</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Light Blue Section */}
      <div className="container light-blue-section">
        <h1 className="text-center">Meet The Pets</h1>
        <p className="text-center">
          Adopting a pet is a wonderful way to bring love and companionship into your life while giving an animal a second chance at a happy home.
        </p>

        {/* Filter, Sort, and Search */}
        <div className="search-controls d-flex justify-content-center mb-3">
          <button className="btn btn-filter me-2">Filter by Age</button>
          <button className="btn btn-filter me-2">Filter by Gender</button>
          <button className="btn btn-filter">Filter by Species</button>
        </div>

        <div className="search-controls d-flex justify-content-center">
          <form className="d-flex align-items-center">
            <input
              className="form-control me-2 w-50 search-bar"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-search" type="submit">Search</button>
          </form>
        </div>
      </div>

      {/* Pets Section */}
      <div className="container">
        <div className="row">
          {/* Pet 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/petdetails/Bailey" className="text-decoration-none">
              <div className="card bailey-card">
                <img src={pet1} className="card-img-top" alt="Bailey" />
                <div className="card-body">
                  <h5 className="card-title">Bailey</h5>
                  <p className="card-text">1 year | Female</p>
                </div>
              </div>
            </Link>
          </div>
          {/* Pet 2 */}
          <div className="col-md-4 mb-4">
            <Link to="/petdetails/Tiger" className="text-decoration-none">
              <div className="card tiger-card">
                <img src={pet2} className="card-img-top" alt="Tiger" />
                <div className="card-body">
                  <h5 className="card-title">Tiger</h5>
                  <p className="card-text">2 years | Male</p>
                </div>
              </div>
            </Link>
          </div>
          {/* Pet 3 */}
          <div className="col-md-4 mb-4">
            <Link to="/petdetails/Fluffy" className="text-decoration-none">
              <div className="card fluffy-card">
                <img src={pet3} className="card-img-top" alt="Fluffy" />
                <div className="card-body">
                  <h5 className="card-title">Fluffy</h5>
                  <p className="card-text">5 months | Female</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pets;
