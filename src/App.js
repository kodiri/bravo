import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar/lisa_navbar.js';
import './NavBar/lisa_navbar.css'
import './App.css';
//import dotenv from 'dotenv';
//dotenv.config();
import User from './firestore/User'

// import QRCodeForm from './QRCodeForm/QRCodeForm';

export default function App() {
  console.log('firestore api key is', process.env.APIKEY);
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path ='/user' component={User}/>
        </Switch>
      </div>  
    </Router>
  );
}
