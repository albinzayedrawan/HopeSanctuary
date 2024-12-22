import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Requests.css';
import logo from '../Images/logo.jpg'; // Adjust the path to your logo image
import { fetchUserRequestsByToken, fetchAdoptionRequests, updateRequestStatus } from './API'; // Import the updateRequestStatus function

const Requests = ({ user, onLogout }) => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getRequests = async () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const token = parsedUserData.token;
        console.log('Token:', token); // Debugging statement
        if (token) {
          try {
            let data;
            if (user.role === 'admin') {
              data = await fetchAdoptionRequests(token);
            } else {
              data = await fetchUserRequestsByToken(token);
            }
            setRequests(data);
          } catch (err) {
            setError('Failed to fetch requests');
            console.error('Error fetching requests:', err);
          }
        } else {
          setError('User not authenticated');
        }
      } else {
        setError('User not authenticated');
      }
    };

    getRequests();
  }, [user]);

  // Redirect non-admin users
  if (user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  const handleStatusUpdate = async (requestId, status) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    if (token) {
      try {
        await updateRequestStatus(requestId, status, token);
        setRequests(requests.map(request => request._id === requestId ? { ...request, status } : request));
      } catch (err) {
        setError('Failed to update request status');
        console.error('Error updating request status:', err);
      }
    }
  };

  const filteredRequests = requests.filter(request =>
    request.pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.name.toLowerCase().includes(searchQuery.toLowerCase())
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
              {user && (
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

      {/* Main Content */}
      <div className="container py-5">
        <div className="container-header">
          <h1 className="fw-bold">Submitted Adoption Request Forms</h1>
        </div>

        <div className="table-container">
          <div className="filter-buttons">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by Pet Name or User Name"
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">🔍</button>
            </div>
          </div>

          {filteredRequests.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Pet Name</th>
                  <th>Adopter Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request._id}>
                    <td>{request.pet.name}</td>
                    <td>{request.name}</td>
                    <td>{request.status}</td>
                    <td>
                      <button className="btn btn-success me-2" onClick={() => handleStatusUpdate(request._id, 'accepted')}>Accept</button>
                      <button className="btn btn-danger" onClick={() => handleStatusUpdate(request._id, 'rejected')}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center">No adoption requests found.</p>
          )}
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Requests;