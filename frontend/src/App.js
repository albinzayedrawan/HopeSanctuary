import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Adopt from './components/Adopt';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Pets from './components/Pets';
import PetsDetails from './components/PetsDetails'; // Ensure the import is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/petdetails/:petName" element={<PetsDetails />} /> {/* Correct path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
