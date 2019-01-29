// JavaScript Document

/*(function(){
    "use strict";
})();*/

/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode*/


//variable name suggestions
function variableExample() {
    var example = document.getElementById("varExample").innerHTML = "Here are some examples of variables. <br>" +
        "<ul>" +
        "<li id='listTag'>This is a string or text variables.</li><br>" +
        "<li> var string = \"I can put text in here\"</li> <br>" +
        "<li id='listTag'>This is a number variable. It can include a decimal point, if so needed. </li><br>" +
        "<li>var number = 25.50 </li><br>" +
        "<li id='listTag'>This is an array variable. An array is a collection of of information stored in a variable. </li><br>" +
        "<li>var toys = ['bat', 'ball', 'doll', 'puzzle', 'kite'] </li><br>" +
        "</ul>";
}

//While Loop Code
//document.getElementById("whileLoop").innerHTML = function() { whileLoop() };

function whileLoop() {

    var text = "";
    var count = 0;
    while (count < 10) {
        text += "<br>The number is:  " + count;
        count++;
    }
    document.getElementById("whileLoop").innerHTML = text;
}


//Do-while Loop Code
function doWhileLoop() {
    var text = "";
    var count = 1;
    do {
        text += (count + " times 7 is " + count * 7 + "<br>")
    } while (++count <= 10);
    document.getElementById("doWhileLoop").innerHTML = text;
}

//For Loop Haystack Game

//get number from client
//validate that the number is between 1 and 20, and is not another type of character
function haystackValidator (){
  var input, numb;
  input = document.getElementById("haystack").value;
  numb = parseInt(input);
  if((numb < 1 )|| (numb > 10)){
    document.getElementById("haystackResponse").innerHTML = "This is an invalid entry. <br>" +
    "Please try again.";
  }else {
    haystackGame(numb);
  }
}

function haystackGame(number){
  
  var needle = Math.floor(Math.random() * 10) + 1;
  if (number === needle){
    document.getElementById("haystackResponse").innerHTML = "You found the needle";
  }else
    document.getElementById("haystackResponse").innerHTML = "Sorry, but you didn't find the needle. <br>" +
    "The number was: " + needle;  
}

//switch statement example
function superHero(){
  var heroName = document.querySelector("input[name='hero']:checked").value;
  
    switch (heroName)
    {
      case "superman":
      case "batman":
      case "wonderWoman":

      document.getElementById("comics").innerHTML = "This Super Hero is a member of the Justice League!";
      break;

      case "ironMan":
      case "captain":
      case "spiderMan":

      document.getElementById("comics").innerHTML = "Say hello to one of the Avengers!";
      break;
    }  
}

function dice(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+".";

  if((diceTotal == 2) || (diceTotal == 3) || (diceTotal == 12)){
      status.innerHTML = "CRAPS! You lose!";
  }else if((diceTotal == 7) || (diceTotal == 11)){
      status.innerHTML = "You won!";
  }else {
    status.innerHTML = "You can roll again, if you want."
  }
}

//multi-dimensional array example
function map(){
  var input1 = document.getElementById("num1").value;
  var input2 = document.getElementById("num2").value;

  a = parseInt(input1);
  b = parseInt(input2);
    if((a < 1 || a > 3) || (b < 1 || b > 3)){
      document.getElementById("mapOutput").innerHTML = "You have entered incorrect numbers."
    } else{
        mapArray();
    }
}
  
  function mapArray(){
    var input1 = document.getElementById("num1").value -1;
    var input2 = document.getElementById("num2").value -1;
    document.getElementById("mapOutput").innerHTML = "Welcome to our Resort & Spa. Enter numbers to tour our beautiful resort";

    var mapArray = new Array(3);
    for(i = 0; i < 3; i++){
      mapArray[i] = new Array(3) 
        for(j = 0; j< 3; j++){
      }
    }
        mapArray [0][0] = "You are in the main lobby";
        mapArray [0][1] = "You have reached the front desk";
        mapArray [0][2] = "You have found the elevator";
        mapArray [1][0] = "You are on the second floor. This is where the spa is located";
        mapArray [1][1] = "The pool is located on the this floor";
        mapArray [1][2] = "The gym is located on the this floor";
        mapArray [2][0] = "This is guest room 300";
        mapArray [2][1] = "This is guest room 301";
        mapArray [2][2] = "You have reached your room, We hope you enjoy your stay";

    document.getElementById("mapResult").innerHTML = mapArray[input1][input2]

  } 

function assocArray(){
  var sport = document.querySelector("input[name='sport']:checked").nodeValue;
  var sports = { "golf": "You will need golf clubs, a golf ball, a course with 18-holes", 
              "tennis": "You will need a tennis racket, a tennis ball, and a court with net",
              "basketball": "You will need a basketball hoop, a basketball, and a court",
              "football" : "You will need a helmet and pads, a football, and a field"
            }
  <br>
  {/* Use a for loop to access the information in the array */}
  for(sport in sports) {
    result = sports[sport];
    document.getElementById("assocArray").innerHTML = value;
  }
}

function assocMap() {
  let input = document.getElementById("assocButton").value;

  var resort = [
    {

    }
  ]
}