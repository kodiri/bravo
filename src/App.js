import React from 'react';
import { BrowserRouter as  Router, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/'>home</Link>
    </div>
    </Router>
  );
}

