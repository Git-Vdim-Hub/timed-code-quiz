//to-do
//1. annotate if answer is right or wrong
//2. create questions
//3. complete styling
//4. write comments
//5. write readme


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

var quizQuestions = [
  question1 = {
    question: 'Blah Blah Blah place your  question here and be marry',
    A: 'this is a really long choice so read it blah blah',
    B: 'ayayayayyaya hello I love chickens',
    C: 'what would it cost to rent a private jet',
    D: 'I wonder how this will look after I am done typing it out',
    Ans: '1. this is a really long choice so read it blah blah'
  },
  question2 = {
    question: "Me Me Me",
    A: 'this answer',
    B: 'that answer',
    C: 'C answer',
    D: 'D answer',
    Ans: '1. this answer'
  },
  question3 = {
    question: "La La La",
    A: 'in answer',
    B: 'out answer',
    C: 'fix answer',
    D: 'stix answer',
    Ans: '1. in answer'
  },
];

function displaySplashPage(){
   splash.innerHTML = `
   <h1 class="title">
    Coding Quiz Challenge
    </h1>
   <div class="container">
      <p class="description">
        Try to answer the following code-related questions within the time limit.
        Keep in mind that incorrect answers will penalize your score/time by _ seconds.
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


function executeQuiz(){
  secondsLeft = 25;
  score=0;
  questionNumber = 0;
  selectedAnswer = "";
  quizComplete=false;
  setTime();
  showQuestion(questionNumber);
  checkQuestion();
};

function showQuestion(question){
  splash.innerHTML=`
    <div class="questionContainer">
      <div class="questions">
      <h1 class="question">${quizQuestions[question].question}</h1>
       <div id="ans">1. ${quizQuestions[question].A}</div>
       <div id="ans">2. ${quizQuestions[question].B}</div>
       <div id="ans">3. ${quizQuestions[question].C}</div>
       <div id="ans">4. ${quizQuestions[question].D}</div>
      </div>
    </div>  
  `;
};

function checkQuestion(){
  document.querySelector('.questions').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    var questionBox = document.querySelector("#ans");
    if(selectedAnswer==quizQuestions[questionNumber].Ans){
      score+=5;
      questionBox.setAttribute('style','background-color: #333333;');
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
          checkQdiv.textContent = "Correct!";
          questionBox.appendChild(checkQdiv);
        }else{
          secondsLeft-=5;
        }
        quizComplete=true;
        score+=secondsLeft;
      });
    }
    
  })
};

function endQuiz(){
  // Stops execution of action at set interval
  clearInterval(timerInterval);
  splash.innerHTML=`
    <div class="questionContainer">
      <div class="questions">
        <h1 class="question">All done!</h1>
        <div> Your final score is ${score}</div>
      </div>
      <div>Enter Initials: </div>
      <input type="text" id="initials">
        <button id="submitBtn" class="button">
        Submit
      </button>
    </div>  
  `;
  splash.addEventListener("click", function(event) {
    var element = event.target;
    if(element.matches("button")===true){
      storeScore();
    }
  }) 
};

function retrieveSavedScores(){
  var storedScores = JSON.parse(localStorage.getItem("scores"));
    scores = storedScores;
    console.log(scores);
}


function storeScore(){
  var initialsValue = document.getElementById("initials").value;
    savedInfo = {
      initials: initialsValue,
      score: score
    } 
  scores[scoreNumberIndex]=savedInfo;
  scoreNumberIndex++;
  localStorage.setItem("scores", JSON.stringify(scores));
  renderScores();
};

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
    li.textContent = `${initials} - ${score}`;
    li.setAttribute("data-index",i);
    element.appendChild(li);
  }
  var goBackButton = document.createElement("button");
  goBackButton.textContent = "Go Back";
  goBackButton.className = "button";
  splash.appendChild(goBackButton);

  var clearHighScoresButton = document.createElement("button");
  clearHighScoresButton.textContent = "Clear High Scores";
  clearHighScoresButton.className = "button";
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
