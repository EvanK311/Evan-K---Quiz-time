
//TODO: Create an html that holds quiz format
//TODO: create a variable that holds array of questions with answers
//TODO: create function that chooses questions with set of answers
//TODO: create function that designates what to do with correct/incorrect answers "take 10 seconds off timer"
//TODO: create function that indicates when game is over.
//TODO: Create high score page that retains name and high score information.

var startBtn = document.getElementById('startBtn')
var questionContentBox = document.getElementById('questionContent')
var randoQuestions, currentQuestionIndex

startBtn.addEventListener('click', starGame) 

function startGame() {
    startBtn.classList.add('hide')
    randoQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContentBox.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    showQuestion(randoQuestions[CurrentQuestionIndex])
}

function showQuestion(questions) {

}

var questions = [
    {
        question: "Which if these are fire types weak to",
        answer: [
            { text: 'Rock', correct: true },
            { text: 'Flying', correct: false },
        ]
    }
]