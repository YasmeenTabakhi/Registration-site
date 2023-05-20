import { quizData } from "./techQ.js"

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const nextBtnT = document.getElementById("next")
const qn = document.querySelector(".question-num")
// const finishBtn = document.querySelector(".finishBtn")
const timerEl = document.getElementById("quiz-timer");

let currentQuiz = 0
let score = 0
let timeRemaining = 600;

loadQuiz()
startTimer();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]
  deselectAnswers()
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(
    (answerEl) => (answerEl.checked = false)
  )
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

qn.textContent = `Question ${currentQuiz + 1}`
nextBtnT.addEventListener("click", () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < 10) {
      qn.textContent = `Question ${currentQuiz + 1}`
      loadQuiz()
    } else {
      // finishBtn.classList.remove("hidden")
      // nextBtnT.classList.add("hidden")
      // console.log(score)
      // localStorage.setItem("Tscore", score)
      // window.location.href = "status.html"
      endQuiz()
    }
  }
})

function endQuiz() {
  // localStorage.setItem("EnglishT", "Done");
  // localStorage.setItem("English-Score", score);
  // window.location.href = "status.html"
  let index = sessionStorage.getItem("index");
  // Save old Data
  let Data = JSON.parse(localStorage.getItem('Data'));
  if (Data[index].taskT) {
    window.location.href = "../status.html";
}

  if (Data[index].taskT === "") {
      Data[index].taskT = score;
     
  }
  console.log(score);

  // Save New Data
  localStorage.removeItem('Data');
  localStorage.setItem('Data', JSON.stringify(Data));
  window.location.href = "../status.html";
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