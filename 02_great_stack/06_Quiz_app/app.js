const questions = [
  {
    question: "What type of instrument is a violin?",
    answers: [
      { text: "Stringed", correct: true },
      { text: "Woodwind", correct: false },
      { text: "Brass", correct: false },
      { text: "Percussion", correct: false },
    ],
  },
  {
    question: "Which author wrote 'Foundation series'?",
    answers: [
      { text: "Ursula K. Le Guin", correct: false },
      { text: "Philip K. Dick", correct: false },
      { text: "Isaac Asimov", correct: true },
      { text: "Stephen King", correct: false },
    ],
  },
  {
    question: "Where in the world would you most expect to be served Ambuyat?",
    answers: [
      { text: "Cambodia", correct: false },
      { text: "Egypt", correct: false },
      { text: "Brunei", correct: true },
      { text: "Barbados", correct: false },
    ],
  },
  {
    question: "What type of pasta is cavatappi?",
    answers: [
      { text: "Strand pasta", correct: false },
      { text: "Soup pasta", correct: false },
      { text: "Ribbon pasta", correct: false },
      { text: "Tubular pasta", correct: true },
    ],
  },
  {
    question: "What is the highest peak on Antarctica?",
    answers: [
      { text: "Vinson", correct: true },
      { text: "Aconcagua", correct: false },
      { text: "Everest", correct: false },
      { text: "Denali", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer_buttons");
const nextButton = document.querySelector(".next_btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "btn";
    button.innerHTML = answer.text;
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct == "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});
StartQuiz();
