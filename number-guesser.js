let prompt = require("prompt-sync")();

//Secret number
let secretNum = Math.floor(Math.random() * 101);
console.log(secretNum); //prints the secret number, so we can guess it and break out of the loop
let tries = 0, guessed = false, guesses = [];
while(!guessed){
  let answer = prompt("Guess a number from 0-100: "); //ask for input
  answer = Number(answer);
  //check if input is a Number
  if(Number.isNaN(answer)){
    console.log("Not a number! Try again!");
  }else{
    //check if input has already been guessed
    if(guesses.includes(answer) === false){
      tries++;
      guesses.push(answer);
    }else{
      console.log("Already guessed!");
      continue;
    }
    //provide feedback on the guess
    if(answer > secretNum){
      console.log("Too high!");
    }else if(answer < secretNum){
      console.log("Too low!");
    }else{
      console.log(`You got it! You took ${tries} attempts!`);
      guessed = true;
    }
  }
}
// console.log("You answered: " + answer);