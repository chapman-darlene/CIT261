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