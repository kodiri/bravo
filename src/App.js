import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar/lisa_navbar.js';
import './NavBar/lisa_navbar.css'
import './App.css';
import QRCodeForm from './QRCodeForm/QRCodeForm';

export default function App() {
  console.log('firestore api key is', process.env.APIKEY);
  return (
    <Router>
      <div className='App'>
      <Route path='/:page' component={Navbar}/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </div>  
    </Router>
  );
}
