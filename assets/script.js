//to-do
//4. write comments
//5. write readme

//initializing all variables displaying the original splash page, listening for button click on high scores or starting the quiz.

const viewHighScores = document.querySelector(".scoreSheetLink");
const splash = document.querySelector('#splashPage');
displaySplashPage();
var timeEl = document.querySelector(".time");
var scoresCountSpan = document.querySelector("#scores-count");
var selectedAnswer;
var questionNumber;
var secondsLeft;
var score;
var quizComplete;
var timerInterval;
var savedInfo = {
  initials: "",
  score: ""
}; 
var scoreNumberIndex=0;
var scores=[];

viewHighScores.addEventListener("click", function(event) {
  renderScores();
  clearInterval(timerInterval);
})

//quiz questions and the answer key.

var quizQuestions = [
  question1 = {
    question: 'What does "JSON" stand for?',
    A: 'JavaScript Object Notation',
    B: 'JavaScript Open Notation',
    C: 'JavaScript On nothing',
    D: 'Java Scripting On Nothing',
    Ans: '1. JavaScript Object Notation'
  },
  question2 = {
    question: "Which CLI command updates the main branch of a repository on GitHub?",
    A: 'git commit -m "<comment>"',
    B: 'git push origin main',
    C: 'git add -A',
    D: 'git status',
    Ans: '2. git push origin main'
  },
  question3 = {
    question: "Which event method prevents rendered elements from dissapearing off the page?",
    A: 'clearInterval()',
    B: 'setTimeout()',
    C: 'preventDefault()',
    D: 'querySelector()',
    Ans: '3. preventDefault()'
  },
  question4 = {
    question: "Which method listens for page events based on peripheral actions?",
    A: 'clearInterval()',
    B: 'createElement()',
    C: 'preventDefault()',
    D: 'addEventListener()',
    Ans: '4. addEventListener()'
  },
  question5 = {
    question: "What does DOM stand for?",
    A: 'Document Object Model',
    B: 'Dont Open Me',
    C: 'Digital Object Mission',
    D: 'Dominic Torreto from The Fast and the Furious',
    Ans: '1. Document Object Model'
  },
  question6 = {
    question: "What kind of a coding tool is github considered?",
    A: 'repository of code',
    B: 'version control',
    C: 'social media testbed',
    D: 'portfolio',
    Ans: '2. version control'
  },
  question7 = {
    question: "Which CLI command is used to make a local copy for the first time?",
    A: 'git add',
    B: 'git push',
    C: 'git clone "<ssh address>"',
    D: 'git pull',
    Ans: '3. git clone "<ssh address>"'
  },
]

//displays original splash page

function displaySplashPage(){
   splash.innerHTML = `
   <h1 class="title">
    Coding Quiz Challenge
    </h1>
   <div class="container">
      <p class="description">
        Try to answer the following code-related questions within the time limit.
        Keep in mind that incorrect answers will penalize your score/time by 5 seconds.
        </p>
    </div>
    <div class="startButtonContainer">
    <button id="startQuiz" class="button">
      Start Quiz
    </button>
  </div>
   `;
   const startQuizBtn = document.querySelector('#startQuiz'); 
  startQuizBtn.addEventListener('click', executeQuiz);
};

// sets all variables to their initial values and starts the quiz.

function executeQuiz(){
  secondsLeft = 120;
  score=0;
  questionNumber = 0;
  selectedAnswer = "";
  quizComplete=false;
  setTime();
  showQuestion(questionNumber);
  checkQuestion();
};

// displays the questions during the quiz

function showQuestion(question){
  splash.innerHTML=`
    <div class="questionContainer">
      <div class="questions">
      <h1 class="question">${quizQuestions[question].question}</h1>
       <div id="a">1. ${quizQuestions[question].A}</div>
       <div id="b">2. ${quizQuestions[question].B}</div>
       <div id="c">3. ${quizQuestions[question].C}</div>
       <div id="d">4. ${quizQuestions[question].D}</div>
      </div>
    </div>  
  `;
};

//checks for answer correctness, calls the next question until quiz is complete.

function checkQuestion(){
  document.querySelector('#a').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    if(selectedAnswer==quizQuestions[questionNumber].Ans){
      score+=5;
      
    }else{
      secondsLeft-=5;
    }
    questionNumber++;
    showQuestion(questionNumber);
    if(questionNumber<(quizQuestions.length-1)){
      checkQuestion();
    } else{
      document.querySelector('.questions').addEventListener('click', function(event){
        selectedAnswer = event.target.innerHTML;
        if(selectedAnswer==quizQuestions[questionNumber].Ans){
          score+=5;
        }else{
          secondsLeft-=5;
        }
        quizComplete=true;
        score+=secondsLeft;
      });
    } 
  })
  document.querySelector('#b').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    if(selectedAnswer==quizQuestions[questionNumber].Ans){
      score+=5;
      
    }else{
      secondsLeft-=5;
    }
    questionNumber++;
    showQuestion(questionNumber);
    if(questionNumber<(quizQuestions.length-1)){
      checkQuestion();
    } else{
      document.querySelector('.questions').addEventListener('click', function(event){
        selectedAnswer = event.target.innerHTML;
        if(selectedAnswer==quizQuestions[questionNumber].Ans){
          score+=5;
        }else{
          secondsLeft-=5;
        }
        quizComplete=true;
        score+=secondsLeft;
      });
    } 
  })
  document.querySelector('#c').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    if(selectedAnswer==quizQuestions[questionNumber].Ans){
      score+=5;
      
    }else{
      secondsLeft-=5;
    }
    questionNumber++;
    showQuestion(questionNumber);
    if(questionNumber<(quizQuestions.length-1)){
      checkQuestion();
    } else{
      document.querySelector('.questions').addEventListener('click', function(event){
        selectedAnswer = event.target.innerHTML;
        if(selectedAnswer==quizQuestions[questionNumber].Ans){
          score+=5;
        }else{
          secondsLeft-=5;
        }
        quizComplete=true;
        score+=secondsLeft;
      });
    } 
  })
  document.querySelector('#d').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    if(selectedAnswer==quizQuestions[questionNumber].Ans){
      score+=5;
      
    }else{
      secondsLeft-=5;
    }
    questionNumber++;
    showQuestion(questionNumber);
    if(questionNumber<(quizQuestions.length-1)){
      checkQuestion();
    } else{
      document.querySelector('.questions').addEventListener('click', function(event){
        selectedAnswer = event.target.innerHTML;
        if(selectedAnswer==quizQuestions[questionNumber].Ans){
          score+=5;
        }else{
          secondsLeft-=5;
        }
        quizComplete=true;
        score+=secondsLeft;
      });
    } 
  })
};

//once all questions are answered or timer runs out, splash page is re-rendered to input initials for recording score in local storage.

function endQuiz(){
  // Stops execution of action at set interval
  clearInterval(timerInterval);
  splash.innerHTML=`
    <div class="questionContainer">
      <div class="questions">
        <h1 class="question">All done!</h1>
        <div> Your final score is ${score}</div>
        <div>Enter Initials: </div>
        <input type="text" id="initials">
        <button id="submitBtn" class="button">
        Submit
      </button>
      </div>
    </div>  
  `;
  splash.addEventListener("click", function(event) {
    var element = event.target;
    if(element.matches("button")===true){
      storeScore();
    }
  }) 
};

//retrieves the saved scores from local storage.

function retrieveSavedScores(){
  var storedScores = JSON.parse(localStorage.getItem("scores"));
    scores = storedScores;
}

//stores a completed quiz score to local storage

function storeScore(){
  var initialsValue = 0;
  initialsValue = document.getElementById("initials").value.trim();
  console.log(initialsValue);
    savedInfo = {
      initials: initialsValue,
      score: score
    } 
  scores[scoreNumberIndex]=savedInfo;
  scoreNumberIndex++;
  localStorage.setItem("scores", JSON.stringify(scores));
  renderScores();
};

//displays all scores in local storage and renders two buttons to either clear all scores from local storage
//or going back to original splash page to re-start the quiz.

function renderScores(){
  retrieveSavedScores();
  splash.innerHTML = "";
  var div = document.createElement("div");
  div.className = "highScoresTitle";
  div.textContent= "Highscores";
  splash.appendChild(div);
  var element = document.querySelector(".highScoresTitle");
  //scoresCountSpan.textContent = scores.length;

  for (var i = 0; i<scores.length; i++){
    var initials = scores[i].initials;
    var score = scores[i].score;
    
    var li = document.createElement("li");
    li.textContent = `${i+1}. ${initials} - ${score}`;
    li.setAttribute("data-index",i);
    element.appendChild(li);
  }
  var goBackButton = document.createElement("button");
  goBackButton.textContent = "Go Back";
  goBackButton.className = "button";
  goBackButton.id = "goBackButton";
  splash.appendChild(goBackButton);

  var clearHighScoresButton = document.createElement("button");
  clearHighScoresButton.textContent = "Clear High Scores";
  clearHighScoresButton.className = "button";
  clearHighScoresButton.id = "clearHighScores";
  splash.appendChild(clearHighScoresButton);
  
  goBackButton.addEventListener("click", function(event) {
    displaySplashPage();
  })

  clearHighScoresButton.addEventListener("click", function(event) {
    var element = document.querySelector(".highScoresTitle");
    scores=[];
    scoreNumberIndex = 0;
    localStorage.setItem("scores", JSON.stringify(scores));
    element.innerHTML = 'Highscores';
    // element.appendChild();
  })
}  

//timer for the quiz

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function() {
    timeEl.textContent = "Time: "+secondsLeft;
    secondsLeft--;

    if(secondsLeft <= 0 || quizComplete) {
      secondsLeft = 0;
      timeEl.textContent = "Time: "+secondsLeft;
      endQuiz();
    }
  }, 1000);
}
