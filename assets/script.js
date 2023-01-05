//pseudocode
//review mod 4
//2. create the High Score entry field
//3. create the scoresheet
//4. add two buttons for the score sheet to either clear it or go back
//  a store the scores in local storage
//5. Create questions
//6. properly link the "View HighScores"
//7. annotate if answer is right or wrong
//8. write comments
//9. write readme



const splash = document.querySelector('#splashPage');
displaySplashPage();
const startQuizBtn = document.querySelector('#startQuiz');
var timeEl = document.querySelector(".time");
startQuizBtn.addEventListener('click', executeQuiz);
var selectedAnswer;
var questionNumber = 0;
var secondsLeft = 25;
var score=0;
var quizComplete=false;
var timerInterval;

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
}


function executeQuiz(){
  setTime();
  showQuestion(questionNumber);
  checkQuestion();
}

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
}

function checkQuestion(){
  document.querySelector('.questions').addEventListener('click', function(event){
    selectedAnswer = event.target.innerHTML;
    console.log(selectedAnswer);
    console.log(quizQuestions[questionNumber].Ans)
    if(selectedAnswer==quizQuestions[questionNumber].Ans){
      score+=5;
    }else{
      secondsLeft-=5;
    }
    questionNumber++;
    showQuestion(questionNumber);
    if(questionNumber<(quizQuestions.length-1)){
      console.log(questionNumber);
      console.log(quizQuestions.length-1);
      checkQuestion();
    } else{
      document.querySelector('.questions').addEventListener('click', function(event){
        selectedAnswer = event.target.innerHTML;
        console.log(selectedAnswer);
        console.log(quizQuestions[questionNumber].Ans)
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
const submitBtn = document.querySelector('#submitBtn');
var initialsInput = document.querySelector("initials");
submitBtn.addEventListener("click", function(event){
  console.log("You clicked the submit button");
  var studentInitials = initialsInput.innerHTML;
  console.log("studentInitials");
});
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