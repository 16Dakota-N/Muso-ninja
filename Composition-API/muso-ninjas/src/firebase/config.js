import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import 'firebase/storage'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCVh4AgtPMQsUXJLgiSqqhSVfHx24mZg74",
    authDomain: "muso-ninjas-ae6cf.firebaseapp.com",
    projectId: "muso-ninjas-ae6cf",
    storageBucket: "muso-ninjas-ae6cf.appspot.com",
    messagingSenderId: "303489427031",
    appId: "1:303489427031:web:7016a04796ae24ab292512"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //time stamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }