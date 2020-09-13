import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3gSCMFvmeqT_hY7lJP2FlMgggdKgGCtI",
  authDomain: "ecommerce-site-demo.firebaseapp.com",
  databaseURL: "https://ecommerce-site-demo.firebaseio.com",
  projectId: "ecommerce-site-demo",
  storageBucket: "ecommerce-site-demo.appspot.com",
  messagingSenderId: "461182062535",
  appId: "1:461182062535:web:78d51aaacd5412133513e2",
  measurementId: "G-LVC7XS5WJR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
