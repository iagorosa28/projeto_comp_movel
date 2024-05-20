// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ27wbbAJPNu8UfdVRRk3MxGJqyyU0_qc",
  authDomain: "projetocompmovel-ce3d3.firebaseapp.com",
  databaseURL: "https://projetocompmovel-ce3d3-default-rtdb.firebaseio.com",
  projectId: "projetocompmovel-ce3d3",
  storageBucket: "projetocompmovel-ce3d3.appspot.com",
  messagingSenderId: "270337305916",
  appId: "1:270337305916:web:70fc225bbb7ecb58a78239",
  measurementId: "G-58VT8D7GEH"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;