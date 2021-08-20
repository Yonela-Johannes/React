import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
require("firebase/auth");
require("firebase/app").default

const firebaseConfig = {
    apiKey: "AIzaSyDcTsmVdFMmf8_UCWafZrYzQscmO8zMMeA",
    authDomain: "react-58e68.firebaseapp.com",
    projectId: "react-58e68",
    storageBucket: "react-58e68.appspot.com",
    messagingSenderId: "282936792147",
    appId: "1:282936792147:web:2c35e086420a029757e2a6"
  };

  let app;

  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);    
  } else{
      app = firebase.app();
  }

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };