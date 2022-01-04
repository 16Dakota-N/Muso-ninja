import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD3hK4KuYLIxl6FyZi7oENOyovssYf6QgM",
  authDomain: "udemy-vue-firebase-sites-1dd64.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-1dd64",
  storageBucket: "udemy-vue-firebase-sites-1dd64.appspot.com",
  messagingSenderId: "275397923052",
  appId: "1:275397923052:web:7c9d041cdca17a451d55c9"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
