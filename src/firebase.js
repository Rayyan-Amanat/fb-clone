// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgHYIV6FZqoKQXM15eRpn23Z8yn6zA4LI",
    authDomain: "facebook-clone-b980e.firebaseapp.com",
    databaseURL: "https://facebook-clone-b980e.firebaseio.com",
    projectId: "facebook-clone-b980e",
    storageBucket: "facebook-clone-b980e.appspot.com",
    messagingSenderId: "202270507256",
    appId: "1:202270507256:web:d33da4d8ad70d500763b0d",
    measurementId: "G-BV25P0G1YS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;