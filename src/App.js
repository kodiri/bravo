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

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/about-app' component={AboutApp}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/terms' component={Terms}/>
        </Switch>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
