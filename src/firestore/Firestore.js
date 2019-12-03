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

export default firebase;