//pseudocode
//review mod 4
//1. hide splashPage details when executeQUiz() is called
//2. 
//3. show first question out of the quiz questions on the screen
//4. 
//5. 
//6. create additional index.html for high scores
//7. 
var startQuizBtn = document.querySelector('#startQuiz');
startQuizBtn.addEventListener('click', executeQuiz);
var quizQuestions = [
  question1 = {
    question: 'Blah Blah Blah',
    A: 'one answer',
    B: 'two answer',
    C: 'three answer',
    D: 'four answer'
  },
  question2 = {
    question: "Me Me Me",
    A: 'this answer',
    B: 'that answer',
    C: 'C answer',
    D: 'D answer'
  },
  question3 = {
    question: "La La La",
    A: 'in answer',
    B: 'out answer',
    C: 'fix answer',
    D: 'stix answer'
  },
];

function hideSplashPage(){
  const splashPageRemoval = document.getElementsByClassName("#splashPage");
  console.log(splashPageRemoval);
  splashPageRemoval.remove();
}

function executeQuiz(){
  console.log("You started the quiz");
  setTime();
  hideSplashPage();
}

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("colorSplosion");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: "+secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      // clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/image_1.jpg");
  // mainEl.appendChild(imgEl);

}


// setInterval(function(){
//   console.log("Hello")
// }, 5000)
    