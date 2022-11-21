import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6QO1mzBsaGe8t-x3c8S-PuyTOoGtE2yQ",
  authDomain: "basic-firebase-web-2f988.firebaseapp.com",
  projectId: "basic-firebase-web-2f988",
  storageBucket: "basic-firebase-web-2f988.appspot.com",
  messagingSenderId: "1015029817204",
  appId: "1:1015029817204:web:c32fb76519769ffa5e9621",
  measurementId: "G-4G4T4736L1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const form = document.getElementById("registerForm");
const formArea = document.getElementById("form-area");
const profile = document.getElementById("profile");
const welcome = document.getElementById("welcome");
const logout = document.getElementById("logout");

const loginForm = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      alert("สร้างบัญชีผู้ใช้เรียบร้อย");
    })
    .catch((error) => {
      alert(error.message);
    });
});

onAuthStateChanged(auth, (user) => {
  //login
  if (user) {
    profile.style.display = "block";
    formArea.style.display = "none";
    welcome.innerText = "ยินดีต้อนรับ " + user.email;
  } else {
    profile.style.display = "none";
    formArea.style.display = "block";
  }
});

logout.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      alert("ออกจากระบบสำเร็จ");
    })
    .catch((error) => {
      alert(error.message);
    });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      alert("ลงชื่อเข้าใช้เรียบร้อย");
    })
    .catch((error) => {
      alert(error.message);
    });

  //   console.log(loginForm.email.value);
  //   console.log(loginForm.password.value);
});
