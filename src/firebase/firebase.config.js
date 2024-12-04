import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_BYUWe4h9QyiJ7yS_5clTXnB7qSQYeMM",
  authDomain: "crwn-462fc.firebaseapp.com",
  projectId: "crwn-462fc",
  storageBucket: "crwn-462fc.appspot.com",
  messagingSenderId: "267909510220",
  appId: "1:267909510220:web:7e35ffc65daf4953a5f0e9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({
  login_hint: "user@example.com",
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
