import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Pets.css"; // Custom CSS for pets page
import logo from "../Images/logo.jpg"; // Logo image
import { fetchPets } from './API'; // Import fetchPets function

const Pets = ({ user, onLogout }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Add search state

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets();
        setPets(data);
      } catch (err) {
        setError('Failed to fetch pets');
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* Light Blue Section */}
      <div className="container light-blue-section">
        <h1 className="text-center">Meet The Pets</h1>
        <p className="text-center">
          Adopting a pet is a wonderful way to bring love and companionship into your life while giving an animal a second chance at a happy home.
        </p>

        {/* Search */}
      
        <div className="search-controls d-flex justify-content-center">
          <form className="d-flex align-items-center">
            <input
              className="form-control me-2 w-50 search-bar"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-search" type="submit">Search</button>
          </form>
        </div>
      </div>

      {/* Pets Section */}
      <div className="container">
        <div className="row">
          {filteredPets.length === 0 ? (
            <div className="col-12">
              <p className="text-center">No pets available at the moment.</p>
            </div>
          ) : (
            filteredPets.map((pet) => (
              <div className="col-md-4 mb-4" key={pet._id}>
                <Link to={`/petdetails/${pet._id}`} className="text-decoration-none">
                  <div className="card">
                    <img src={pet.picture} className="card-img-top" alt={pet.name} />
                    <div className="card-body">
                      <h5 className="card-title">{pet.name}</h5>
                      <p className="card-text">{pet.age} years | {pet.gender}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Pets;