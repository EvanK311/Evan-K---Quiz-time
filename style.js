
//TODO: Create an html that holds quiz format
//TODO: create a variable that holds array of questions with answers
//TODO: create function that chooses questions with set of answers
//TODO: create function that designates what to do with correct/incorrect answers "take 10 seconds off timer"
//TODO: create function that indicates when game is over.
//TODO: Create high score page that retains name and high score information.

var startBtn = document.getElementById('startBtn');
var questionContentBox = document.getElementById('questionContent');

var questionMaker = document.getElementById('question');
var answerButton = document.getElementById('answerChoices');


let randoQuestions, currentQuestionIndex;
    
startBtn.addEventListener('click', startGame);

function startGame() {
    console.log("started");
    startBtn.classList.add('hide');
    questionContentBox.classList.remove('hide');
    currentQuestionIndex = 0;
    nextQuestion();
}


function nextQuestion() {
   
function showQuestion(question) {
    questionMaker.innerText = question.question;
}

var questions = [
    {
        question: 'Which if these are fire types weak to',
        answer: [
            { text: 'Rock', correct: true },
            { text: 'Flying', correct: false },
        ]
    }
];