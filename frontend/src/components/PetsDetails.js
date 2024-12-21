import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PetsDetails.css";
import logo from "../Images/logo.jpg"; // Import logo image

// Import pet images
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img8 from "../Images/8.jpg";
import img9 from "../Images/9.jpg";
import img12 from "../Images/12.jpg";
import img13 from "../Images/13.jpg";
import img14 from "../Images/14.jpg";
import img15 from "../Images/15.jpg";
import img16 from "../Images/16.jpg";
import img17 from "../Images/17.jpg";

// Pet data
const petsData = {
  Bailey: {
    image: img1,
    thumbnails: [img9, img12, img13],
    name: "Bailey",
    id: "0001",
    species: "Dog",
    breed: "Labrador Retriever",
    size: "Large",
    age: "1 year",
    gender: "Female",
    color: "Yellow",
    description: "Bailey is a loyal companion, loves long walks, and is great with kids.",
    vaccinated: "Yes",
    neutered: "Yes",
    medicalConditions: "None",
    adoptionFee: "120 BD",
  },
  Tiger: {
    image: img2,
    thumbnails: [img2, img14, img15],
    name: "Tiger",
    id: "0002",
    species: "Cat",
    breed: "Bengal",
    size: "Small",
    age: "2 years",
    gender: "Male",
    color: "Orange and White",
    description: "Tiger is a playful and curious cat.",
    vaccinated: "Yes",
    neutered: "Yes",
    medicalConditions: "None",
    adoptionFee: "80 BD",
  },
  Fluffy: {
    image: img8,
    thumbnails: [img8, img16, img17],
    name: "Fluffy",
    id: "0010",
    species: "Dog",
    breed: "Golden Retriever",
    size: "Medium",
    age: "5 months",
    gender: "Female",
    color: "Gold",
    description: "Fluffy is a lovable puppy full of energy and affection.",
    vaccinated: "Yes",
    neutered: "No",
    medicalConditions: "None",
    adoptionFee: "100 BD",
  },
};

const PetsDetails = () => {
  const { petName } = useParams();
  const pet = petsData[petName];

  // State to track the currently displayed main image
  const [mainImage, setMainImage] = useState(pet.image);

  if (!pet) {
    return <h2>Pet Not Found</h2>;
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1675d3" }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
            <div className="d-flex flex-column">
              <span className="text-white fw-bold" style={{ fontSize: "1.25rem" }}>
                Hope Sanctuary
              </span>
              <span className="text-white" style={{ fontSize: "0.9rem" }}>
                Adoption Center
              </span>
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
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/pets">
                  Pets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/adopt">
                  Adopt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white active" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Details Section */}
      <div className="details-page">
        <div className="details-container">
          <div className="image-section">
            {/* Main Image */}
            <img className="main-image" src={mainImage} alt={pet.name} />
            {/* Thumbnails */}
            <div className="thumbnails">
              {pet.thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`${pet.name} thumbnail ${index + 1}`}
                  onClick={() => setMainImage(thumb)} // Update the main image on click
                  className="thumbnail"
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
          <div className="info-section">
            <h2>Meet {pet.name}</h2>
            <p><strong>Pet ID:</strong> {pet.id}</p>
            <p><strong>Species:</strong> {pet.species}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Size:</strong> {pet.size}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Gender:</strong> {pet.gender}</p>
            <p><strong>Color:</strong> {pet.color}</p>
            <h3>About {pet.name}</h3>
            <p>{pet.description}</p>
            <p><strong>Vaccinated:</strong> {pet.vaccinated}</p>
            <p><strong>Neutered/Spayed:</strong> {pet.neutered}</p>
            <p><strong>Medical Conditions:</strong> {pet.medicalConditions}</p>
            <p><strong>Adoption Fee:</strong> {pet.adoptionFee}</p>
            <button className="adopt-button">Adopt {pet.name} Now!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetsDetails;
