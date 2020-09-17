
//TODO: Create an html that holds quiz format
//TODO: create a variable that holds array of questions with answers
//TODO: create function that chooses questions with set of answers
//TODO: create function that designates what to do with correct/incorrect answers "take 10 seconds off timer"
//TODO: create function that indicates when game is over.
//TODO: Create high score page that retains name and high score information.

var startBtn = document.getElementById('startBtn');
var questionContentBox = document.getElementById('questionContent');
var ansBtn = document.getElementById('btn')
var ansBtn2 = document.getElementById('btn2')
var ansBtn3 = document.getElementById('btn3')
var ansBtn4 = document.getElementById('btn4')
var questionMaker = document.getElementById('currentQuestion');
var answerButton = document.getElementById('answerChoices');


var randoQuestions
var currentQuestionIndex

var questions = [
    {
        question: 'Which type is fire weak to',
        answer1: 'Rock',
        answer2: 'Grass',
        answer3: 'Flying',
        answer4: 'Ice',
        correct: 'Rock'
    },

    {
        question: 'Pikachu evolves using what method?',
        answer1: 'Level up',
        answer2: 'Trading',
        answer3: 'Thunder Stone',
        answer4: 'Friendship',
        correct: 'Thunde Stone',
    }
];

questionMaker.style.display = "none"
questionContentBox.style.display = "none"

document.getElementById("startBtn").addEventListener('click', function(startgame) {    
        console.log("started");
        startBtn.style.display = "none";
    questionContentBox.style.display = "block";
    questionMaker.style.display = "block"
    questionMaker.textContent = questions[0].question
    ansBtn.textContent = questions[0].answer1
    ansBtn2.textContent = questions[0].answer2
    ansBtn3.textContent = questions[0].answer3
    ansBtn4.textContent = questions[0].answer4

        // nextQuestion();
    }
)

// function nextQuestion() {

//     function showQuestion(question) {
//         currentQuestion.innerText = question.question;
//     }
// }



// questionMaker.textContent = questions[0].question
// ansBtn.textContent = questions[0].answer1
console.log(questions[0].question)
console.log(questions[0].answer)