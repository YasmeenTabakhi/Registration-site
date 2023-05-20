// ENGLISH TEST ELEMENTS
// Qusation
import {quizDataEnglish} from "./techQ.js"

/// end of Qustion
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const answerTextA = document.getElementById("a_text");
const answerTextB = document.getElementById("b_text");
const answerTextC = document.getElementById("c_text");
const answerTextD = document.getElementById("d_text");
const nextBtn = document.getElementById("next_btn");
const timerEl = document.getElementById("quiz-timer");
const quizNumberEl = document.getElementById("q-number");
const finishBtn = document.querySelector(".finishBtn")
const nextBtnT = document.getElementById("next")

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 1200; // 20 minutes in seconds

startTimer();
// Function to start the quiz
function startQuiz() {
  showQuestion();
}

// Function to display a question and its options
function showQuestion() {
  deselectAnswers()
  quizNumberEl.innerHTML = `Question Number : ${currentQuestionIndex + 1}`;
  const currentQuestion = quizDataEnglish[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  answerTextA.innerText = currentQuestion.a;
  answerTextB.innerText = currentQuestion.b;
  answerTextC.innerText = currentQuestion.c;
  answerTextD.innerText = currentQuestion.d;
}

// Function to start the timer
function startTimer() {
  const interval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerEl.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeRemaining === 0) {
      clearInterval(interval);
      endQuiz();
    } else {
      timeRemaining--;
    }
  }, 1000);
}

// function  returns  a user selected option
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Function to handle user's answer submission and check if the option correct
function submitAnswer() {
  const selectedAnswer = getSelected();

  if (selectedAnswer === quizDataEnglish[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < 15) {
    showQuestion();
    // selectedAnswer.checked = false;
  } else {
    endQuiz();
    // finishBtn.classList.remove("hidden")
    //   nextBtnT.classList.add("hidden")
  }
}

// Function to end the quiz and display the final score
function endQuiz() {
  // localStorage.setItem("EnglishT", "Done");
  // localStorage.setItem("English-Score", score);
  // window.location.href = "status.html"
  let index = sessionStorage.getItem("index");
  // Save old Data
  let Data = JSON.parse(localStorage.getItem('Data'));
  if (Data[index].taskE) {
    window.location.href = "../status.html";
}

  if (Data[index].taskE === "") {
      Data[index].taskE = score;
     
  }

  // Save New Data
  localStorage.removeItem('Data');
  localStorage.setItem('Data', JSON.stringify(Data));
  window.location.href = "../status.html";
}


nextBtn.addEventListener("click", submitAnswer);
// to start the quiz we call the below method
startQuiz();


function deselectAnswers() {
  answerEls.forEach(
    (answerEl) => (answerEl.checked = false)
  )
}