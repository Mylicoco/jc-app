// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxJCcPkBx0SCnpeyaVmpUdMzot8x_bZec",
  authDomain: "crwn-clothes-565ed.firebaseapp.com",
  projectId: "crwn-clothes-565ed",
  storageBucket: "crwn-clothes-565ed.appspot.com",
  messagingSenderId: "96783818707",
  appId: "1:96783818707:web:8c654c0c67ef1468a29926",
  measurementId: "G-KLT2R4VK9T",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const db = getFirestore(firebaseConfig);
// const todosCol=collection(db, "todos");
// getDocs(todosCol);

onAuthStateChanged((auth,user) => {
  if (user != null) {
    console.log("log in");
  }else{
      console.log("not log");
  }
});
// Initialize Firebase
