import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYfxaD6LsFZR1dJPs4RxDBBm6eICWbo4U",
    authDomain: "react-netflix-build.firebaseapp.com",
    projectId: "react-netflix-build",
    storageBucket: "react-netflix-build.appspot.com",
    messagingSenderId: "516412869506",
    appId: "1:516412869506:web:0548c2704dab03b0b75d9b",
    measurementId: "G-JJXZLLGKNM"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {auth};
  export default db;