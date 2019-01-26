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
  if(numb < 1 || numb > 10){
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

      document.getElementById("comics").innerHTML = "Welcome to the Justice League!";
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
  var map1 = parseInt(input1)-1;
  var map2 = parseInt(input2)-1;

  function inputValidator(a,b){
    a = map1;
    b = map2;
    if((a < 0 || a > 8) || (b < 0 || b > 8 )){
      document.getElementById("mapOutput").innerHTML = "You have entered incorrect numbers."
    }
  }
  
  mapArray = new Array(3)

  mapArray [0][0] = "You are in the main lobby";
  mapArray [0][1] = "You have reached the front desk";
  mapArray [0][2] = "You have found the elevator";
  mapArray [1][0] = "You are on the first floor";
  mapArray [1][1] = "The pool is located here";
  mapArray [1][2] = "The gym is on this floor";
  mapArray [2][0] = "This is guest room 200";
  mapArray [2][1] = "This is guest room 201";
  mapArray [2][2] = "You have reached your room";

  document.getElementById("mapOutput").innerHTML = "Welcome to our Spa";
  for(i = 0; i <= 3; i++){

   for(j = 0; j <= 3; j++){
     
     document.getElementById("mapOutput").innerHTML = mapArray[i][j];
   }
 }
    
  
}

  


/*  For loop with Break
    var haystack = new Array()
    haystack[17] = "Needle";

    for(j=0; j<20; ++j){
    if(haystack[j]=="Needle"){
      document.write("<br>-Found at location: " + j);
        break;
    }else document.write(j + ", ");
  }

*/




/*Switch Statement
  switch(page)
    {
    case "Home":
      document.write("You selected Home");
      break;
    case "About":
      document.write("You selected About");
      break;
    case "News":
      document.write("You selected News");
      break;
    case "Login":
      document.write("You selected Login");
      break;
    case "Links":
      document.write("You selected Links");
      break;
  }

*/

/* Ternary operator
  document.write(
    a <=5 ?
    "a is less than or equal to 5" :
    "a is greater than 5";

    size = a <=5 ? "short" : "long";
) */

/* document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pkgPriceForm').addEventListener('submit', total);

    var buttonTotal = document.getElementById('pkgTotal');
}); */

/*document.getElementById('pkgPriceForm').addEventListener('submit', total);
var buttonTotal = document.getElementById('pkgTotal');

function total(event) {
    event.preventDefault();
    var selectedItems = document.querySelectorAll('input[name="choice"]:checked');
    var subtotal = 0;
    selectedItems.forEach(function(i) {
        subtotal += Number(i.value);
    });

}*/

/*
var selectedItems = document.querySelectorAll('input[name="choice"]:checked');
var total = 0;
selectedItems.forEach(function(i) {
    total += Number(i.value);
});

document.getElementById("totalPrice").innerHTML = "The total package price is: $" + total;
*/