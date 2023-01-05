//pseudocode
//review mod 4
//1. fix logic error between functions to check answer
//2. create the High Score entry field
//3. create the scoresheet
//4. add two buttons for the score sheet to either clear it or go back
//  a store the scores in local storage
//5. Create questions



const splash = document.querySelector('#splashPage');
displaySplashPage();
const startQuizBtn = document.querySelector('#startQuiz');
var timeEl = document.querySelector(".time");
startQuizBtn.addEventListener('click', executeQuiz);
var selectedAnswer;
var questionNumber = 0;
var secondsLeft = 25;
var score=0;

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
    <button id="startQuiz" class="startButton">
      Start Quiz
    </button>
  </div>
   `;
}


function executeQuiz(){
  console.log("You started the quiz");
  setTime();
  showQuestion(questionNumber);
  checkQuestion();
  // questionNumber++;
}

function showQuestion(question){
  splash.innerHTML=`
    <div class="questionContainer">
      <div class="questions">
      <h1 class="question">${quizQuestions[question].question}</h1>
       <div id="A">1. ${quizQuestions[question].A}</div>
       <div id="B">2. ${quizQuestions[question].B}</div>
       <div id="C">3. ${quizQuestions[question].C}</div>
       <div id="D">4. ${quizQuestions[question].D}</div>
      </div>
    </div>  
  `;
}

function endQuiz(){
  splash.innherHTML='';
  console.log(splash.innherHTM);
}

function checkQuestion(){
  document.querySelector('.questions').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    console.log(selectedAnswer);
    console.log(quizQuestions[questionNumber].Ans)
    if(selectedAnswer!==quizQuestions[questionNumber].Ans){
      score+=5;
    }else{
      secondsLeft-=5;
    }
    questionNumber++;
    showQuestion(questionNumber);
    if(questionNumber<=(quizQuestions.length-1)){
      console.log(questionNumber);
      console.log(quizQuestions.length-1);
      checkQuestion();
    } else{
      score+=secondsLeft;
      endQuiz();
    }
    
  })
};

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: "+secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endQuiz();
    }

  }, 1000);
}

function endQuiz(){

}
    