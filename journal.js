//URL: https://github.com/DaisyLara/cs81-module3a-github

// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}


//simple addition
function sum(x, y) {
  return x + y
}
console.log(sum(5, 8));


//function for bullying unless your name is Daisy
function conditionalLoser(name) {
  let capitalizedName = name.toUpperCase(); 
  if (capitalizedName === "DAISY") {
      console.log ("You are a goddess, " + name + "!"); 
  } else {
    console.log ("You're a no-good loser, " + name + "!");
    }
  }
conditionalLoser("Daisy");
conditionalLoser ("Bill");

//count to 100
function countToHundred() {
  let numbers = []; 
    for (let i = 1; i < 101; i++) {
      numbers.push(i)
    }
    return numbers
  }
console.log(countToHundred())

//Absolute value
function absValue(number) {
  if (Number.isInteger(number)) {
  return Math.abs(number)
  } else {
    console.log("Not valid")
  }
}
console.log(absValue(6));

//Basic function, not declaration
const fruit = (entry) => "Is a " + entry+ " a fruit or a vegetable?"
console.log(fruit("tomato"));