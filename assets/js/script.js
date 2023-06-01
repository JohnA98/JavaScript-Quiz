const startBtnEl = document.querySelector("#start-game-button");
const quizTimerEl = document.querySelector("#quiz-timer");
const scoreEl = document.querySelector("#current-score");
const questionEl = document.querySelector("#question-box");
const scoreBoardBoxEl = document.querySelector("#score-board-box");
const optionBoxesEl = document.querySelector(".option-boxes");

var questionsArr = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<scripting>", "<javascript>", "<js>", "<script>"],
    answer: "<script>",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
    answer: "if (i == 5)",
  },
  {
    question: "How does a for loop start?",
    options: [
      "for (i <= 5; i++)",
      "for (i - 0; i <=5)",
      "for i = 1 to 5",
      "for (i = 0, i <=5; i++)",
    ],
    answer: "for (i = 0, i <=5; i++)",
  },
  {
    question:
      "How do you call a function named \"myFunction\"?",
    options: ["myFunction()", "call function myFunction()", "call myFunction()", "None of the above"],
    answer: "myFunction()",
  },
  {  
    question:
      "Which of these does not belong on pizza?",
    options: ["Pepperoni", "Mushrooms", "Pineapple", "Olives"],
    answer: "Pineapple",
  },
];

var time;
var score = 0;

function firstQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArr[0].question;
    optionBoxesEl.children[i].textContent = questionsArr[0].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    var target = event.target;
    if (target.textContent == questionsArr[0].answer) {
      plusScore();
    } else {
      minusTime();
    }
    secondQuestion();
  };
}

function secondQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArr[1].question;
    optionBoxesEl.children[i].textContent = questionsArr[1].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    var target = event.target;
    if (target.textContent == questionsArr[1].answer) {
      plusScore();
    } else {
      minusTime();
    }
    thirdQuestion();
  };
}

function thirdQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArr[2].question;
    optionBoxesEl.children[i].textContent = questionsArr[2].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    var target = event.target;
    if (target.textContent == questionsArr[2].answer) {
      plusScore();
    } else {
      minusTime();
    }
    fourthQuestion();
  };
}

function fourthQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArr[3].question;
    optionBoxesEl.children[i].textContent = questionsArr[3].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    var target = event.target;
    if (target.textContent == questionsArr[3].answer) {
      plusScore();
    } else {
      minusTime();
    }
    fifthQuestion();
  };
}

function fifthQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArr[4].question;
    optionBoxesEl.children[i].textContent = questionsArr[4].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    var target = event.target;
    if (target.textContent == questionsArr[4].answer) {
      plusScore();
    } else {
      minusTime();
    }
    time = 0;
  };
}

function endGame() {
  quizTimerEl.textContent = 0;
  optionBoxesEl.style.visibility = "hidden";
  startBtnEl.style.visibility = "hidden";

  var userInitialsPrompt = prompt(
    "Congratulations! Your score is " + score + "! Please input your initials to save your score."
  );

  questionEl.textContent = "Congratulations " + userInitialsPrompt + "! Your score is " + score + "!";

  if (userInitialsPrompt == "") return;

  highScore(score, userInitialsPrompt);
  startBtnEl.style.visibility = "visible";
}

function plusScore() {
  score++;
  scoreEl.textContent = score;
}

function minusTime() {
  time = time - 15;
  quizTimerEl.textContent = time;
}

function highScore (quizScore, quizInitials) {
  var currentScore = quizScore;
  var currentInitials = quizInitials;

  var highestScore = parseInt(localStorage.getItem("highestScore")) || 0;
  var highestInitials = localStorage.getItem("highestInitials") || "";

  if (currentScore > highestScore) {
    highestScore = currentScore;
    highestInitials = currentInitials;
    localStorage.setItem("highestScore", highestScore);
    localStorage.setItem("highestInitials", highestInitials);
  }
  scoreBoardBoxEl.children[0].textContent = highestInitials;
  scoreBoardBoxEl.children[1].textContent = highestScore;
}

function gameTimer() {
  time = 60;
  score = 0;
  var timer = setInterval(() => {
    quizTimerEl.textContent = time--;
    if (time < 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
};

function startGame() {
  scoreEl.textContent = 0;
  optionBoxesEl.style.visibility = "visible";
  gameTimer();
  firstQuestion();
  startBtnEl.style.visibility = "hidden";
}

// scoreBoardBoxEl.children[0].textContent += localStorage.getItem("name");
// scoreBoardBoxEl.children[1].textContent += localStorage.getItem("score");



startBtnEl.addEventListener("click", startGame);
