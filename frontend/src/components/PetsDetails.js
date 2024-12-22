import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PetsDetails.css"; // Custom CSS for pet details page
import logo from "../Images/logo.jpg"; // Logo image
import { fetchPetById } from './API'; // Import fetchPetById function

const PetsDetails = ({ user, onLogout }) => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPetDetails = async () => {
      try {
        const data = await fetchPetById(petId);
        setPet(data);
      } catch (err) {
        setError('Failed to fetch pet details');
        console.error('Error fetching pet details:', err);
      } finally {
        setLoading(false);
      }
    };

    getPetDetails();
  }, [petId]);

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
              {user?.role === 'admin' && (
                <li className="nav-item"><Link className="nav-link text-white" to="/requests">Requests</Link></li>
              )}
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

      {/* Main Content */}
      <div className="container py-5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          pet && (
            <div className="row">
              <div className="col-md-6">
                <img src={pet.picture} className="img-fluid pet-image" alt={pet.name} />
              </div>
              <div className="col-md-6">
                <h1>{pet.name}</h1>
                <p><strong>Species:</strong> {pet.species}</p>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Age:</strong> {pet.age} years</p>
                <p><strong>Gender:</strong> {pet.gender}</p>
                <p><strong>Size:</strong> {pet.size}</p>
                <p><strong>Color:</strong> {pet.color}</p>
                <p><strong>About:</strong> {pet.about}</p>
                <p><strong>Vaccinated:</strong> {pet.vaccinated ? 'Yes' : 'No'}</p>
                <p><strong>Neutered:</strong> {pet.neutered ? 'Yes' : 'No'}</p>
                <p><strong>Medical Conditions:</strong> {pet.medicalConditions}</p>
                <p><strong>Adoption Fee:</strong> ${pet.adoptionFee}</p>
                <Link to="/adopt" className="btn btn-primary">Adopt {pet.name}</Link>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default PetsDetails;