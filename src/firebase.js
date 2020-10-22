import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2nbNOj9eKRQsq017APYUaVxeyq5-iLrE',
  authDomain: 'whatsapp-clone-6e4ae.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-6e4ae.firebaseio.com',
  projectId: 'whatsapp-clone-6e4ae',
  storageBucket: 'whatsapp-clone-6e4ae.appspot.com',
  messagingSenderId: '615059877214',
  appId: '1:615059877214:web:2fde574ad586a7edc0b3cf',
  measurementId: 'G-ECTRFJ8Z23',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

//Auth handlers
const auth = firebase.auth();

//google auths
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
