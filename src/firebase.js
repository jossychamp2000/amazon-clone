import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAU2UYwTe44LVy_qCSu_CWA10rIpoAjN_Q",
    authDomain: "challenge-9e6d7.firebaseapp.com",
    projectId: "challenge-9e6d7",
    storageBucket: "challenge-9e6d7.appspot.com",
    messagingSenderId: "616852620258",
    appId: "1:616852620258:web:ecaaeae736aecf4cfc2fbb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};