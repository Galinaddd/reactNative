// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// // Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// // Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// // Функція для підключення сховища файлів в проект
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAy5X7tY69MdCdrb1o4TmAJEFRyVN21rkg",
  authDomain: "social-rn-d09bb.firebaseapp.com",
  projectId: "social-rn-d09bb",
  storageBucket: "social-rn-d09bb.appspot.com",
  messagingSenderId: "1055462874455",
  appId: "1:1055462874455:web:7b3d0beb1d904cfd03f212",
  measurementId: "G-THW218RBE8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const storageRef = ref(storage);
