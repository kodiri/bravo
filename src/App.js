import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Terms from './Terms';
import AboutUs from './AboutUs';
import AboutApp from './AboutApp';


export default function App() {

  const [footerItems, setFooterItems] = useState([]);
    
    function setFItems(currentPage) {
        console.log('its me');
        let pagesArray = ['About Us', 'About App', 'Terms'];
        let pages = pagesArray.filter(page => {
            return page !== currentPage
        });
        setFooterItems(pages);
    }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><LandingPage page='About Us' /></Route>
          {/* <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/profile-page' component={ProfilePage}/>
          <Route exact path='/settings' component={Settings}/> */}
          <Route exact path='/about-us'><AboutUs prop={() => setFItems()} /></Route>
          <Route exact path='/' />
          <Route exact path='/' component={Terms} />
          {/* <Route exact path='/' component={SignIn}/>
                <Route exact path='/' component={SignUp}/> */}
        </Switch>
        <Footer links={footerItems} />
      </div>
    </Router>
  );
}

