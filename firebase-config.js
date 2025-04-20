// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP9qLb19VInTvoZz9E30hLZ9U-8jv04GM",
  authDomain: "weblogin-66629.firebaseapp.com",
  projectId: "weblogin-66629",
  storageBucket: "weblogin-66629.firebasestorage.app",
  messagingSenderId: "692302675341",
  appId: "1:692302675341:web:d859171032e0c9767f91c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log("Firebase initialized successfully");