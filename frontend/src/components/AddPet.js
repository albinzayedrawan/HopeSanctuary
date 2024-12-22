import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddPet.css"; 
import logo from "../Images/logo.jpg"; 
import { createPet } from './API'; // Import the createPet function

const AddPetForm = ({ user, onLogout }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [about, setAbout] = useState(""); 
  const [vaccinated, setVaccinated] = useState(false); // Boolean
  const [neutered, setNeutered] = useState(false); // Boolean
  const [medicalConditions, setMedicalConditions] = useState("");
  const [adoptionFee, setAdoptionFee] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPet = {
      name,
      species,
      breed,
      size,
      age: parseInt(age), // Ensure age is a number
      gender,
      color,
      about, 
      vaccinated: vaccinated === 'true', // Convert to boolean
      neutered: neutered === 'true', // Convert to boolean
      medicalConditions,
      adoptionFee: parseFloat(adoptionFee), // Ensure adoptionFee is a number
      picture: image,
    };

    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;

    try {
      await createPet(newPet, token);
      setMessage("Pet added successfully!");
      // Reset form after submission
      setName("");
      setSpecies("");
      setBreed("");
      setSize("");
      setAge("");
      setGender("");
      setColor("");
      setAbout(""); 
      setVaccinated(false);
      setNeutered(false);
      setMedicalConditions("");
      setAdoptionFee("");
      setImage("");
    } catch (error) {
      setMessage("Failed to add pet.");
      console.error("Error adding pet:", error);
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

      {/* Add Pet Form */}
      <div className="container form-section">
        <h1 className="text-center">Add a New Pet</h1>
        <p className="text-center">
          Please fill out the form below to add a new pet for adoption.
        </p>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Species</label>
              <input
                type="text"
                className="form-control"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Breed</label>
              <input
                type="text"
                className="form-control"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Size</label>
              <input
                type="text"
                className="form-control"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Color</label>
              <input
                type="text"
                className="form-control"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Vaccinated</label>
              <select
                className="form-control"
                value={vaccinated}
                onChange={(e) => setVaccinated(e.target.value)}
                required
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Neutered</label>
              <select
                className="form-control"
                value={neutered}
                onChange={(e) => setNeutered(e.target.value)}
                required
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Medical Conditions</label>
              <input
                type="text"
                className="form-control"
                value={medicalConditions}
                onChange={(e) => setMedicalConditions(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Adoption Fee</label>
              <input
                type="number"
                className="form-control"
                value={adoptionFee}
                onChange={(e) => setAdoptionFee(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
          </div>

          {/* New About field */}
          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">About</label>
              <textarea
                className="form-control"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                rows="4"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">Add Pet</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPetForm;