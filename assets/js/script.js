var startContainer = document.querySelector("#start-quiz");
var start = document.querySelector("#start-button");
var quizContainer = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var scoreContainer = document.querySelector("#score-container");
var runningQuestionIndex = 0;

// Quiz Questions

var questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    {
        question : "What does HTML stand for?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    {
        quizQuestion : "What does HTML stand for?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    {
        question : "What does HTML stand for?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    { 
        question : "What does HTML stand for?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    }
];

var lastQuestionIndex = questions.length - 1;

var startQuiz = function() {
    startContainer.style.display = "none";
    questionRender();
    quizContainer.style.display = "flex";
};

var questionRender = function(){
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};


start.addEventListener("click", startQuiz );
