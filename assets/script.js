//pseudocode
//review mod 4
//1. pull in timer function from lesson x
//2. pull in generate button function from last assignment
//3. pull in the object lesson code x
//4. make the questions in the object lesson code x
//5. style timer to the right side, change start time, store final score
//6. create additional index.html for high scores
//7. 

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
  mainEl.appendChild(imgEl);

}

setTime();

// setInterval(function(){
//   console.log("Hello")
// }, 5000)

var planet = {
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    population: "7.594 billion",
    // Objects can store arrays in a key-value pair
    neighboringPlanets: ["Mars", "Venus"],
    // Objects can also store methods
    tellFunFact: function () {
      console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
    },
    showWarning: function () {
      console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
    }
  };
  
  // To access a value in an array, use the name of the object, the key and the index.
  // Logs "Mars" using dot notation
  console.log(planet.neighboringPlanets[0]);
  
  // Logs "Mars" using bracket notation
  console.log(planet["neighboringPlanets"][0]);
  
  // To call a method, use the name of the object and the key. Don't forget the ()!
  planet.tellFunFact();
  planet.showWarning();
    