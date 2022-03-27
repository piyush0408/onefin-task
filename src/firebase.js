 import firebase from 'firebase'

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
    apiKey: "AIzaSyAj2Z7WHm1c2m_mai7uxm0-AK5oWJ_DGrw",
    authDomain: "yoursnapfire.firebaseapp.com",
    projectId: "yoursnapfire",
    storageBucket: "yoursnapfire.appspot.com",
    messagingSenderId: "778020036568",
    appId: "1:778020036568:web:de9c2233277e2fc5731cad",
    measurementId: "G-6Y9G5RJJSS"
  };
  firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
  export  {db}