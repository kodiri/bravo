import React from 'react';
import Navbar from './pages/lisa_navbar.js';
import './pages/lisa_navbar.css'
import { BrowserRouter as  Router, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Link to='/'>home</Link>
    </div>
    </Router>
  );
}

