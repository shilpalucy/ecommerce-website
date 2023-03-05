import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDuq0rreKkz3qUffqQJBTfOnAk5__c3b3M",
  authDomain: "anu-design-couture.firebaseapp.com",
  databaseURL: "https://anu-design-couture-default-rtdb.firebaseio.com",
  projectId: "anu-design-couture",
  storageBucket: "anu-design-couture.appspot.com",
  messagingSenderId: "27956600490",
  appId: "1:27956600490:web:430e57f1cda306b440bad3",
  measurementId: "G-G9NT89RNZV"
};



firebase.initializeApp(config);
export const auth = firebase.auth();










