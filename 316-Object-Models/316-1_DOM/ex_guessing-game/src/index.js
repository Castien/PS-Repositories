// ==== Guessing Game ==== //
let userGuess; // variable for user response
let numberOfGuesses = 5; // Store the number of guesses
const randomNumber = Math.round(Math.random() * 5) + 1; // Create a random number between 1-100
console.log(randomNumber);

// update span with number of guesses
const span = document.querySelector("span");
span.textContent = numberOfGuesses;

setTimeout(() => {
  userGuess = Number(prompt(`Guess a number from 1 to 100`));
  console.log(`You guess is ${userGuess}`);
  check();
}, 500);

function promptUser() {
  userGuess = Number(prompt(`Guess a number from 1 to 100`));
  console.log(`You guess is ${userGuess}`);
  check();
}

function check() {
  if (numberOfGuesses === 0) {
    console.log("Game Over!");
    return true;
  }

  if (userGuess === randomNumber) {
    console.log(`You win the Number was: ${randomNumber}`);
    return;
  } else if (userGuess < randomNumber) {
    console.log("Go Higher!");
    numberOfGuesses--
} else if (userGuess > randomNumber) {
    console.log("Go Lower!");
    numberOfGuesses--
  }
  console.log(`Number of guesses left: ${numberOfGuesses}`);
  span.textContent = numberOfGuesses;
  setTimeout(promptUser, 500);
}
