import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './PagesComponents/LandingPage';
import Navbar from './NavBar/lisa_navbar.js';
import './NavBar/lisa_navbar.css'
import './App.css';
import AboutApp from './PagesComponents/AboutApp';
import AboutUs from './PagesComponents/AboutUs';
import Terms from './PagesComponents/Terms';
import Footer from './Footer/Footer';
import Dashboard from './PagesComponents/Dashboard';
import ProfilePage from './PagesComponents/ProfilePage';
import NotFound from './PagesComponents/NotFound';
import Login from './Login/Login';
import QRCodeForm from './QRCodeForm/QRCodeForm';

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
          <Route exact path='/login' component={Login} />
          <Route exact path='/:notFound' component={NotFound}/>
        </Switch>
        <Route path='/:page' component={Footer}/>
      </div> 
    </Router>
  );
}