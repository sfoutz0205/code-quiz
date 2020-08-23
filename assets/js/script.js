var startContainer = document.querySelector("#start-quiz");
var startButton = document.querySelector("#start-btn");
var quizContainer = document.querySelector("#quiz");
var questionElement = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var scoreContainer = document.querySelector("#score-container");
var shuffledQuestions, currentQuestionIndex


// TIMER ELEMENT
var startTimer = function () {
    var counter = 60;
    setInterval(function() {
    counter--;
    if(counter >= 0) {
        time = document.getElementById("count");
        time.innerHTML = "Time: " + counter;
    }
}, 1000);
};


// QUIZ QUESTIONS/ANSWERS
var questions = [
    {
        question : "QUESTION 11111111111111111111?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    {
        question : "QUESTION 22222222222222222?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "D"
    },
    {
        question : "QUESTION 3333333333333?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    {
        question : "QUESTION 444444444444444?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    },
    { 
        question : "QUESTION 5555555555555?",
        choiceA : "Answer A",
        choiceB : "Answer B",
        choiceC : "Answer C",
        choiceD : "Answer D",
        correct: "A"
    }
];

// START QUIZ FUNCTION
var startQuiz = function() {
    startTimer();
    startContainer.style.display = "none"
    currentQuestionIndex = 0
    quizContainer.style.display = "flex"
    setNextQuestion()
};

var setNextQuestion = function() {
    showQuestion([currentQuestionIndex]);
}

var showQuestion = function() {
    var q = questions[currentQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
};

var checkAnswer = function(answer) {
    if(questions[currentQuestionIndex].correct == answer){
        currentQuestionIndex++
        showQuestion()
    }
    else {
        alert("NAH")
    }
}
startButton.addEventListener("click", startQuiz );
