const app = document.getElementById("app");
const totalGuess = document.getElementById("guess");

// random number between 1 and 10
//https://www.w3schools.com/js/js_random.asp
const randomNumber = Math.floor(Math.random() * 10) + 1;
// Number of guesses allowed
let count = 10;

// let pool;
// setTimeout(() => {
//   pool = Number(prompt(`What is the highest number you want to guess from?`));
//   checkAnswer();
// }, 500);

let guess;
setTimeout(() => {
  guess = Number(prompt(`Guess a number between 1 and 10!`));
  checkAnswer();
}, 500);

function checkAnswer() {
  if (guess && guess <= 10 && guess >= 1 && count > 0 && guess !== randomNumber) {
    const isHighOrLow = guess < randomNumber ? `higher` : "lower";
    alert(`The number is ${isHighOrLow} than ${guess}.`);
    setTimeout(next, 500);
  } else {
    if (guess === randomNumber) {
      alert("Nice job! You guessed correctly!");
    } else {
      alert(`The answer was ${randomNumber}.`);
    }
  }
}

function next() {
  const isHighOrLow = guess < randomNumber ? "higher" : "lower";
  guess = Number(prompt(`Try again, it's ${isHighOrLow} than ${guess}.
  You have ${count} guesses left!`));

  count--;
  check();
}
  


