import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pagesComponents/LandingPage';
import Navbar from './NavBar/lisa_navbar.js';
import './NavBar/lisa_navbar.css'
import './App.css';
import AboutApp from './pagesComponents/AboutApp';
import AboutUs from './pagesComponents/AboutUs';
import Terms from './pagesComponents/Terms';
import Footer from './footer/Footer';
import Dashboard from './pagesComponents/Dashboard';
import ProfilePage from './pagesComponents/ProfilePage';
import NotFound from './pagesComponents/NotFound';
//import QRCodeForm from './QRCodeForm/QRCodeForm';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/:page' component={Navbar}/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/landing' component={LandingPage}/>
          <Route exact path='/about-app' component={AboutApp}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/terms' component={Terms}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/profile-page' component={ProfilePage}/>
          <Route exact path='/:notFound' component={NotFound}/>
        </Switch>
        <Route path='/:page' component={Footer}/>
      </div> 
    </Router>
  );
}