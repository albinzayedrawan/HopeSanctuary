import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet'; // Import EditPet component
import Adopt from './components/Adopt';
import Admin from './components/Admin';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Pets from './components/Pets';
import PetsDetails from './components/PetsDetails';
import Requests from './components/Requests'; // Import the Requests component

function ProtectedRoute({ user, children, adminOnly = false }) {
  // If the page is admin-only and the user is not an admin, redirect to home
  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  // If the user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is authorized, render the children (protected route content)
  return children;
}

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    console.log('User data:', userData); // Add this line to check user data
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.alert('You have successfully logged out.');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
          <Route path="/about" element={<AboutUs user={user} onLogout={handleLogout} />} />
          <Route path="/contact" element={<ContactUs user={user} onLogout={handleLogout} />} />
          <Route path="/adopt" element={<Adopt user={user} onLogout={handleLogout} />} />
          <Route path="/pets" element={<Pets user={user} onLogout={handleLogout} />} />
          <Route path="/petdetails/:petId" element={<PetsDetails user={user} onLogout={handleLogout} />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
          
          {/* Admin Route (only accessible by admins) */}
          <Route path="/admin" element={<ProtectedRoute user={user} adminOnly={true}><Admin user={user} onLogout={handleLogout} /></ProtectedRoute>} />
          <Route path="/requests" element={<ProtectedRoute user={user} adminOnly={true}><Requests user={user} onLogout={handleLogout} /></ProtectedRoute>} /> {/* Add the Requests route */}
          <Route path="/admin/add-pet" element={<ProtectedRoute user={user} adminOnly={true}><AddPet user={user} onLogout={handleLogout} /></ProtectedRoute>} />
          <Route path="/admin/edit-pet/:petId" element={<ProtectedRoute user={user} adminOnly={true}><EditPet user={user} onLogout={handleLogout} /></ProtectedRoute>} /> {/* Add the EditPet route */}
          
          {/* Fallback Route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;