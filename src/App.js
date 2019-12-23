import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navBar/NavBar';
import './App.css';
import AboutApp from './components/aboutApp/AboutApp'
import AboutUs from './components/aboutUs/AboutUs';
import Terms from './components/terms/Terms';
import Footer from './components/footer/Footer.js';
import Dashboard from './components/dashBoard/DashBoard';
import ProfilePage from './components/profilePage/ProfilePage';
import Settings from './components/settings/Settings';
import NotFound from './components/notFound/NotFound';
import Show from './components/fireStore/Show'


export default function App() {
  return (
    <Router>
      <div className='App'>
      <Route exact path='/' component={Navbar} />
        <Route path='/:page' component={Navbar} />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about-app' component={AboutApp} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/show/:id' component={Show} />
          <Route exact path='/profile-page' component={ProfilePage} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/:notFound' component={NotFound} />
        </Switch>
        <Route path='/:page' component={Footer} />
        <Route exact path='/' component={Footer} />
      </div>
    </Router>
  );
}