//pseudocode
//review mod 4
//1. change questions to table row
//2. check correct answer
//3. create the High Score entry field
//4. create the scoresheet using table row
//5. add two buttons for the score sheet to either clear it or go back
//  a store the scores in local storage
//6. Create function to show the initial page again
//7. create function to hide and show Start Quiz Button
var startQuizBtn = document.querySelector('#startQuiz');
startQuizBtn.addEventListener('click', executeQuiz);
const splash = document.querySelector('#splashPage');
var quizQuestions = [
  question1 = {
    question: 'Blah Blah Blah',
    A: 'one answer',
    B: 'two answer',
    C: 'three answer',
    D: 'four answer',
    Ans: 'A'
  },
  question2 = {
    question: "Me Me Me",
    A: 'this answer',
    B: 'that answer',
    C: 'C answer',
    D: 'D answer',
    Ans: 'A'
  },
  question3 = {
    question: "La La La",
    A: 'in answer',
    B: 'out answer',
    C: 'fix answer',
    D: 'stix answer',
    Ans: 'A'
  },
];

function displaySplashPage(){
  //  const title = document.createElement('h1');
  //  title.classList.add("title");
  //  title.innerHTML = 'Coding Quiz Challenge';
   splash.innerHTML = `
   <h1 class="title">
    Coding Quiz Challenge
    </h1>
   <div class="descContainer">
      <p class="description">
        Try to answer the following code-related questions within the time limit.
        Keep in mind that incorrect answers will penalize your score/time by _ seconds.
        </p>
    </div>
   `;

   //list.appendChild(title);

  //  const descContainer = document.createElement('div');
  //  descContainer.classList.add("descContainer");
  //  list.appendChild('div');
  //  const desc = document.createElement("p");
  //  desc.classList.add("description");
  //  desc.innerHTNL = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by _ seconds."
  //  descContainer.appendChild("desc");
}

displaySplashPage();

function hideSplashPage(){
  console.log(splash);
  for(var i=0; i<splash.length; i++){
    splash[i].remove();
  }
  console.log(splash);
}

function executeQuiz(){
  console.log("You started the quiz");
  setTime();
  showQuestion();
  checkQuestion();
}

function showQuestion(){
  splash.innerHTML=`
  <h1 class="title">${quizQuestions[0].question}</h1>
  <div class="descContainer">
     <p class="description">
       ${quizQuestions[0].A}
       ${quizQuestions[0].B}
       ${quizQuestions[0].C}
       ${quizQuestions[0].D}
   </div>
  `;
  console.log(splash);
}

function checkQuestion(){
  splash.addEventListener("click", function (event) {
       var element = event.target;
       console.log(element);
  })
};

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
    