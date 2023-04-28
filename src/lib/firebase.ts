import firebase from 'firebase/compat/app'
import 'firebase/compat/auth' // <- needed if using auth
import 'firebase/compat/firestore' // <- needed if using firestore
import 'firebase/compat/storage' // <- needed if using storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYWYeGym6SS5BIGhFVKCo75I2LboamdUo',
  authDomain: 'rene-social.firebaseapp.com',
  projectId: 'rene-social',
  storageBucket: 'rene-social.appspot.com',
  messagingSenderId: '794088290228',
  appId: '1:794088290228:web:52988e0a72736cd2a024e1',
  measurementId: 'G-R4MXTJ22F3',
}


  firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()
