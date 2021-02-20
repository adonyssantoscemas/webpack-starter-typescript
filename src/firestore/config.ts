import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
	apiKey: "AIzaSyBy3ksn9RHZjJYO310FZqbRnSQ_yVFUlXY",
    authDomain: "sql-adonys.firebaseapp.com",
    databaseURL: "https://sql-adonys-default-rtdb.firebaseio.com",
    projectId: "sql-adonys",
    storageBucket: "sql-adonys.appspot.com",
    messagingSenderId: "604776006993",
    appId: "1:604776006993:web:d5eeced680a66c8c1c3f70",
    measurementId: "G-0T5P0H2JX9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
