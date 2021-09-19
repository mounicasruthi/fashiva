import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCokiRiqRpeHyAUFpZW5bxgaNGqZtDchTs",
    authDomain: "fashiva-db.firebaseapp.com",
    projectId: "fashiva-db",
    storageBucket: "fashiva-db.appspot.com",
    messagingSenderId: "99058813635",
    appId: "1:99058813635:web:c1866e64ff7d19141a3076",
    measurementId: "G-W36HM6GE0N"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth, signInWithPopup,  GoogleAuthProvider  } from "firebase/auth";


// const config = {
//     apiKey: "AIzaSyCokiRiqRpeHyAUFpZW5bxgaNGqZtDchTs",
//     authDomain: "fashiva-db.firebaseapp.com",
//     projectId: "fashiva-db",
//     storageBucket: "fashiva-db.appspot.com",
//     messagingSenderId: "99058813635",
//     appId: "1:99058813635:web:c1866e64ff7d19141a3076",
//     measurementId: "G-W36HM6GE0N"
//   };


//   const app = initializeApp(config);

//   export const auth = getAuth();
//   export const firestore = getFirestore();
  
//   const provider = new GoogleAuthProvider();
//   provider.setCustomParameters({ prompt: 'select_account' });
//   export const signInWithGoogle = () => signInWithPopup(provider);
  
//   export default app;
