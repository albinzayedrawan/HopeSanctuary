import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Adopt.css'; // Import Adopt-specific CSS
import logo from '../Images/logo.jpg'; // Import the logo image
import { fetchPets, fetchUser, submitAdoptionForm } from './API'; // Import fetchPets, fetchUser, and submitAdoptionForm functions

const Adopt = ({ user, onLogout }) => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formMessage, setFormMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

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

    const getUser = async () => {
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
      const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
      if (token && userId) {
        try {
          const userData = await fetchUser(userId, token);
          setUserInfo({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
          });
        } catch (err) {
          console.error('Failed to fetch user', err);
        }
      }
    };

    getPets();
    getUser();
  }, []);

  const handlePetChange = (e) => {
    setSelectedPet(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!selectedPet) errors.selectedPet = 'Please select a pet';
    if (!userInfo.name) errors.name = 'Please enter your name';
    if (!userInfo.phone) errors.phone = 'Please enter your phone number';
    if (!userInfo.email) errors.email = 'Please enter your email';
    if (!document.getElementById('addressLine1').value) errors.addressLine = 'Please enter your address';
    if (!document.getElementById('city').value) errors.city = 'Please enter your city';
    if (!document.getElementById('postalCode').value) errors.zipCode = 'Please enter your postal/ZIP code';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
    const formData = {
      user: userId, // Include user ID
      pet: selectedPet, // Ensure pet ID is sent
      name: userInfo.name,
      phoneNumber: userInfo.phone, // Ensure phoneNumber is sent
      email: userInfo.email,
      addressLine: document.getElementById('addressLine1').value,
      city: document.getElementById('city').value,
      zipCode: document.getElementById('postalCode').value,
    };

    try {
      await submitAdoptionForm(formData, token);
      setFormMessage('Adoption form submitted successfully!');
    } catch (err) {
      setFormMessage('Failed to submit adoption form.');
      console.error('Error submitting adoption form:', err);
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

      
      {/* Adopt Form Section */}
      <div className="container form-section">
        <h1 className="text-center">Adopt A Pet</h1>
        <p className="text-center">
          Fill out the form below to submit your adoption application. Once a member of staff has reviewed your application, you will be contacted to meet your pet and complete the adoption process.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="petSelect" className="form-label">Pet</label>
            <select className="form-select" id="petSelect" value={selectedPet} onChange={handlePetChange}>
              <option value="">Choose a pet...</option>
              {pets.map((pet) => (
                <option key={pet._id} value={pet._id}>
                  {pet.name}
                </option>
              ))}
            </select>
            {formErrors.selectedPet && <div className="text-danger">{formErrors.selectedPet}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Phone number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
            {!user?.role === 'admin' && (
              <small>
                Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link>
              </small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control mb-2" id="addressLine1" placeholder="Address Line 1" />
            {formErrors.addressLine && <div className="text-danger">{formErrors.addressLine}</div>}
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control" id="city" placeholder="City" />
                {formErrors.city && <div className="text-danger">{formErrors.city}</div>}
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="postalCode" placeholder="Postal / ZIP code" />
                {formErrors.zipCode && <div className="text-danger">{formErrors.zipCode}</div>}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-submit px-4">Submit Application</button>
          </div>
        </form>
        {formMessage && <p className="text-center mt-3">{formMessage}</p>}
      </div>
    </>
  );
};

export default Adopt;