import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhgiEvBBm_Gl5RMdkxAiCufH89RJ-fLIc",
    authDomain: "jason-s-personal-website.firebaseapp.com",
    projectId: "jason-s-personal-website",
    storageBucket: "jason-s-personal-website.appspot.com",
    messagingSenderId: "56309379579",
    appId: "1:56309379579:web:acbb87ee4c8f9aaccf9b5e",
    measurementId: "G-2CBD7KEEVQ"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const storageRef = ref(storage);