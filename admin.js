import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvqbWpS1s_l72Fh8CLxO2jWFnEbSSIGSk",
  authDomain: "kasinojpwork.firebaseapp.com",
  databaseURL: "https://kasinojpwork-default-rtdb.firebaseio.com",
  projectId: "kasinojpwork",
  storageBucket: "kasinojpwork.firebasestorage.app",
  messagingSenderId: "291449017470",
  appId: "1:291449017470:web:14d6815edcd61f3618b42f",
  measurementId: "G-D648ETD7YD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', () => {
  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();

  if(!question || !answer){
    alert("Isi pertanyaan dan jawaban!");
    return;
  }

  push(ref(db, 'qa'), { question, answer });
  alert("Jawaban tersimpan!");
  document.getElementById('question').value = "";
  document.getElementById('answer').value = "";
});
