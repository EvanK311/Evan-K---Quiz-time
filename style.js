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



var startGameBlock = document.querySelector(".startGame") // start game block
var questionBlock = document.querySelector(".questions"); // questions block
var answersBlock = document.querySelector(".answers"); //answers block
var submitBtn = document.querySelector(".submitArea"); //submit button
var timeRemaining = document.querySelector(".timeRemaining"); //time remaining
var gameOver = document.querySelector(".endGame"); //game over page
var userScore = document.querySelector(".score"); //user score
var userName = document.querySelector("#userName");

//On clicking start game, time remaining, question block, answer buttons, and submit button become visible
document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGameBlock.style.display = "none";
    questionBlock.style.display = "block";
    answersBlock.style.display = "block";
    timeRemaining.style.display = "block";
    quizTimer();
    questionSelector();
})

function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = "You have " + secondsLeft + " seconds remaining";
      if(secondsLeft <= 0) {
        endTheGame(timerInterval)
      }
    }, 1000);
}
  
function questionSelector() {
  questionText.textContent = pokeQuestions[questionNum].questionBlock;
  answerBtnOne.textContent = pokeQuestions[questionNum].ans1
  }

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