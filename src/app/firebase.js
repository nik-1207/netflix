import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX7-rTQPw4xf_bSksRn0-4-6JMwTtkVy4",
  authDomain: "netflix-clone-499a0.firebaseapp.com",
  projectId: "netflix-clone-499a0",
  storageBucket: "netflix-clone-499a0.appspot.com",
  messagingSenderId: "22198106933",
  appId: "1:22198106933:web:d98ebc4a399b769b492a7c",
  measurementId: "G-RRHSM4EZ3D",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
