import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Homepage from './components/Homepage/Homepage.js';
import Navigation from './components/Navigation/Navigation.js';
import Projects from './components/Projects/Projects.js'; 
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';

function App() {
  // Retrieve activePage from localStorage or default to 'home'
  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || 'home');

  // Update localStorage when activePage changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  return (
    <Router>
      <div className="App">
        <Navigation setActivePage={setActivePage} />
        <Routes>
          <Route path="/" element={<Homepage setActivePage={setActivePage} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
