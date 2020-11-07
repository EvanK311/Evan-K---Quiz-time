var questionsRemaining = 5;
var correctAnswer= "";
var quizScore = 0;
var secondsLeft = 30;
var questionNum = 0;
var listNum = 1;
var questionText = document.querySelector(".questionArea");
var answerBtnOne = document.querySelector("#answerOneBtn");
var answerBtnTwo = document.querySelector("#answerTwoBtn");
var answerBtnThree = document.querySelector("#answerThreeBtn");
var answerBtnFour = document.querySelector("#answerFourBtn");
var highScoreList = document.querySelector("#high-score-list");



var startGame = document.querySelector(".startGame") // start game block
var questions = document.querySelector(".questions"); // questions block
var answers = document.querySelector(".answers"); //answers block
var submitBtn = document.querySelector(".submitArea"); //submit button
var timeRemaining = document.querySelector(".timeRemaining"); //time remaining
var gameOver = document.querySelector(".endGame"); //game over page
var userScore = document.querySelector(".score"); //user score
var userName = document.querySelector("#userName");

//On clicking start game, time remaining, question block, answer buttons, and submit button become visible
document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGame.style.display = "none";
    questions.style.display = "block";
    answers.style.display = "block";
    timeRemaining.style.display = "block";
    quizTimer();
    questionSelector();
})

function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = secondsLeft + " seconds";
      if(secondsLeft <= 0) {
        endGame(timerInterval)
      }
    }, 1000);
}
  
function questionSelector() {
  questionText.textContent = pokeQuestions[questionNum].question;
  answerOneBtn.textContent = pokeQuestions[questionNum].answer1;
  answerTwoBtn.textContent = pokeQuestions[questionNum].answer2;
  answerThreeBtn.textContent = pokeQuestions[questionNum].answer3;
  answerFourBtn.textContent = pokeQuestions[questionNum].answer4;
  }

var ans1Text
var ans2Text
var ans3Text
var ans4Text

answers.addEventListener("click", function (event) {
  
  if (event.target.matches("button")) {
    var userAns = (event.target.innerHTML)
    var correctAns = pokeQuestions[questionNum].correct;
    questionNum++;

    if (userAns === correctAns) {
      quizScore = quizScore + 20;
    } else {
      secondsLeft = secondsLeft - 10;
    }
    if (questionNum == 3) {
      endGame(0);
      return;
    }
    questionSelector()
  }
})

function endGame(endTime) {
  clearInterval(endTime);
  questions.style.display = "none";
  answers.style.display = "none";
  timeRemaining.style.display = "none";
  gameOver.style.display = "block"
}

function highScore() {
  for (let i = 0; i < listNum; i++){

    var list = document.createElement("li")
    list.setAttribute("data-index", i);
    list.innerHTML = quizScore + userName.nodeValue;
    highScoreList.appendChild(list)
  }
}

var hiScoreBtn = document.querySelector("#hiScoreBtn")
hiScoreBtn.addEventListener("click", function (event) {
  localStorage.setItem("Quiz score", quizScore);
  localStorage.setItem("user name", userName.value);
  highScore();
})

pokeQuestions = [  
{
            question: 'Which type is fire weak to',
            answer1: 'Rock',
            answer2: 'Grass',
            answer3: 'Flying',
            answer4: 'Ice',
            correct: 'Rock'
        },
    
        {
            question: 'Pikachu evolves using what method?',
            answer1: 'Level up',
            answer2: 'Trading',
            answer3: 'Thunder Stone',
            answer4: 'Friendship',
            correct: 'Thunder Stone',
        },
        {
            question: 'Which of these does not belong',
            answer1: 'Zapdos',
            answer2: 'Articuno',
            answer3: 'Lugia',
            answer4: 'Moltres',
            correct: 'Lugia',
        }
  ]