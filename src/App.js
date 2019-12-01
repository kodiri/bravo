import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './pages/lisa_navbar.js';
import './pages/lisa_navbar.css'
import './App.css';
import Footer from './Footer/Footer'
import AboutApp from './AboutApp';
import AboutUs from './AboutUs';
import Terms from './Terms';
import QR from './QRCodeForm/QRCodeForm';

export default function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={QR}/>
          <Route exact path='/about-app' component={AboutApp}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/terms' component={Terms}/>
        </Switch>
        <Footer />
      </div>  
    </Router>
  );
}
