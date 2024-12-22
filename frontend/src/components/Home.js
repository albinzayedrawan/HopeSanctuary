import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../Images/logo.jpg';
import { fetchPets } from './API';

const Home = ({ user, onLogout }) => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Add search state

  // Fetch pet data from the backend on component mount
  useEffect(() => {
    const getPets = async () => {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        setError('Failed to fetch pets');
        console.error('Error fetching pets:', error);
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
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-search" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={require('../Images/10.jpg')}
                alt="Welcome Image"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pet Images Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Error Message */}
          {error && <p className="text-danger">{error}</p>}

          {/* Display pets if they exist, otherwise show a message */}
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <div className="col-md-6 text-center" key={pet._id}>
                <img
                  src={pet.picture}
                  alt={pet.name}
                  className="img-fluid rounded shadow fixed-size-img"
                />
              </div>
            ))
          ) : (
            <p>No pets available for adoption.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;