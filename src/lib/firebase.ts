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

//helper functions

export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection('users')
  const query = usersRef.where('username', '==', username).limit(1)
  const userDoc = (await query.get()).docs[0]
  return userDoc
}

export function postToJSON(doc: { data: () => any }) {
  const data = doc.data()
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  }
}
export const fromMillis = firebase.firestore.Timestamp.fromMillis
