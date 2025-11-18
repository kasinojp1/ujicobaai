import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

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
const chatDiv = document.getElementById('chat');
const askBtn = document.getElementById('askBtn');

let qaList = [];
const qaRef = ref(db, 'qa');
onChildAdded(qaRef, (snapshot) => {
  qaList.push(snapshot.val());
});

askBtn.addEventListener('click', () => {
  const userQuestion = document.getElementById('userQuestion').value.trim();
  if(!userQuestion) return;

  let found = qaList.find(q => q.question.toLowerCase() === userQuestion.toLowerCase());
  let answer = found ? found.answer : "Maaf, saya belum punya jawaban untuk pertanyaan ini.";

  chatDiv.innerHTML += `<p><strong>Kamu:</strong> ${userQuestion}</p>`;
  chatDiv.innerHTML += `<p><strong>Bot:</strong> ${answer}</p>`;

  document.getElementById('userQuestion').value = "";
});
