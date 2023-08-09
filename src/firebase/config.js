
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVm6AuxmqkkBsX-2vi2IJZpM-qwfigQR4",
  authDomain: "miniblogdev.firebaseapp.com",
  projectId: "miniblogdev",
  storageBucket: "miniblogdev.appspot.com",
  messagingSenderId: "705208582725",
  appId: "1:705208582725:web:2d8028168abbab1281992c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}