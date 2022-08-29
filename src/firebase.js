import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgY2kYSzo03jTFjJ63qDnKX_gUbTzIp_8",
    authDomain: "twitter-clone-e4b86.firebaseapp.com",
    projectId: "twitter-clone-e4b86",
    storageBucket: "twitter-clone-e4b86.appspot.com",
    messagingSenderId: "515544965939",
    appId: "1:515544965939:web:e1633041f0f00e7d4a9446",
    measurementId: "G-STJ2EBM6CF"
  };

  // Use this to initialize the firebase App
   const firebaseApp = firebase.initializeApp(firebaseConfig);

    // Use these for db & auth
    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { auth, db };