import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar/lisa_navbar.js';
import './NavBar/lisa_navbar.css'
import './App.css';
import QRCodeForm from './QRCodeForm/QRCodeForm';
import FooterLoggedOut from './Footer/FooterLoggedOut';

export default function App() {
  return (
    <Router>
      <div className='App'>
      <Route path='/:page' component={Navbar}/>
      <FooterLoggedOut/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </div>  
    </Router>
  );
}
