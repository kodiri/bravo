import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import './App.css';


export default function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </div>  
    </Router>
  );
}
