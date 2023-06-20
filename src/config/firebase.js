import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCziTRZPat5lx9NHpzw2Ek3ig91V6PnicM",
  authDomain: "tiktok---jornada-6e7f5.firebaseapp.com",
  projectId: "tiktok---jornada-6e7f5",
  storageBucket: "tiktok---jornada-6e7f5.appspot.com",
  messagingSenderId: "288850707304",
  appId: "1:288850707304:web:33a983dc1aff1346848cdd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;