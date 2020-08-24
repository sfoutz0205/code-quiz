var startContainer = document.querySelector("#start-quiz");
var startButton = document.querySelector("#start-btn");
var quizContainer = document.querySelector("#quiz");
var scoreContainer = document.querySelector("#score");
var scoreBtn = document.querySelector("#scores-btn");
var highScoresEl= document.querySelector("#high-scores");
var questionElement = document.querySelector("#question");
var username = document.getElementById("initials");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var currentQuestionIndex
var timeLeft = 0;
var timer;
var highScoresList = document.getElementById("highScoresList");

// QUIZ QUESTIONS/ANSWERS
var questions = [
    {
        question : "In JavaScript function what do we call block of code designed to perform a particular task?",
        choiceA : "Function",
        choiceB : "Array",
        choiceC : "Object",
        choiceD : "Loop",
        correct: "A"
    },
    {
        question : "Which is used to store multiple values in a single variable.",
        choiceA : "String",
        choiceB : "List",
        choiceC : "Loop",
        choiceD : "Array",
        correct: "D"
    },
    {
        question : "Which of the following can be used to declare a variable?",
        choiceA : "var",
        choiceB : "const",
        choiceC : "let",
        choiceD : "All the above",
        correct: "D"
    },
    {
        question : "Which of these is the operator for logical 'or'",
        choiceA : "&&",
        choiceB : "||",
        choiceC : "//",
        choiceD : "!",
        correct: "B"
    },
    { 
        question : "Which node mothod adds a new child node to an element as the last child node",
        choiceA : "cloneNode()",
        choiceB : "appendChild()",
        choiceC : "hasChildNodes()",
        choiceD : "replaceChild()",
        correct: "B"
    }
];

// TIMER
function startTimer() {

    timeLeft = 60;
    document.getElementById("time").innerHTML = "Time: " + timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").innerHTML = "Time: " + timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// START QUIZ FUNCTION
var startQuiz = function() {
    startTimer();
    startContainer.style.display = "none"
    currentQuestionIndex = 0
    quizContainer.style.display = "flex"
    setNextQuestion()
};

// QUIZ QUESTION FUNCTIONS
var setNextQuestion = function() {
   if (currentQuestionIndex <= questions.length - 1) {
       showQuestion([currentQuestionIndex]);
   }
   else {
       endQuiz();
   }
};

var showQuestion = function() {
    var q = questions[currentQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
};

// CHECK ANSWER FUNCTION
var checkAnswer = function(answer) {
    if(questions[currentQuestionIndex].correct == answer){
        currentQuestionIndex++
        setNextQuestion()
    }
    else {
        timeLeft -= 10
    }
};

// SCORE FUNCTIONS
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var saveHighScore = function() {
    var score = {
        score : timeLeft,
        name : username.value
    };
    highScores.push(score);
    document.getElementById("score-form").reset();
    scoreContainer.style.display = "none"
    startContainer.style.display = "flex"
};

var scoresList = document.querySelector("#highScoresList");
scoresList.innerHTML = highScores.map(function (score) {
    console.log ('<li>' + score.name + " - " + score.score + '</li>');
}).join('');




// END QUIZ FUNCTION
var endQuiz = function() {
    clearInterval(timer);
    quizContainer.style.display = "none"
    scoreContainer.style.display = "flex"
};

var highScoresLoad = function() {
    quizContainer.style.display = "none"
    startContainer.style.display = "none"
    highScoresEl.style.display = "flex"
};

startButton.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", highScoresLoad);

