import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDva7Jz0M4Iu5QzdVt2Uttk-mh9E3qK5-A",
authDomain: "tap-app-12ee9.firebaseapp.com",
databaseURL: "https://tap-app-12ee9.firebaseio.com",
projectId: "tap-app-12ee9",
storageBucket: "tap-app-12ee9.appspot.com",
messagingSenderId: "543848800624",
appId: "1:543848800624:web:96b5a97eece7dceae4efb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();