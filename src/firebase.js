import firebase from 'firebase/app'

import 'firebase/database'

const appName = 'vinogradar-7cfc3'
firebase.initializeApp({
  apiKey: "AIzaSyDH--kbbmYb5YvjBsj2eEoq6PHIPqgktDc",
  authDomain: `${appName}.firebaseapp.com`,
  projectId: `${appName}`,
  databaseURL: `https://${appName}-default-rtdb.firebaseio.com/`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "1025382712937",
  appId: "1:1025382712937:web:78f76777915a3c820204f8",
  measurementId: "G-ZHQNJ4RKVZ"
})