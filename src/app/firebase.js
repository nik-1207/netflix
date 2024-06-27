import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG2BCy9EuxHMrH7N8KPOIHmePaXWRVpYg",
  authDomain: "portfolio-c1134.firebaseapp.com",
  projectId: "portfolio-c1134",
  storageBucket: "portfolio-c1134.appspot.com",
  messagingSenderId: "272700700529",
  appId: "1:272700700529:web:4bbbe3d58d135a3454a8d0",
  measurementId: "G-X10KL2CC7K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
