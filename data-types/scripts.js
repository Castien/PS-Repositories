console.log("=======================================================================");
console.log("The Examples");
console.log("=======================================================================");
// The initial numbers that must be verified. We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
console.log(dontDoThis);

console.log("=======================================================================");
console.log("My Answers");
console.log("=======================================================================");

// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.//
const divisibleBy5 = (n1 % 5 && n2 % 5 && n3 % 5 && n4 % 5) == 0;
console.log(divisibleBy5);

// Check if the first number is larger than the last. Cache the result in a variable.
const firstGreaterThanLast = n1 > n4;
console.log(firstGreaterThanLast);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number. Should be 5.
const chainProb1 = n2 - n1;
console.log(chainProb1);
// Multiply the result by the third number. Should be 100.
const chainProb2 = chainProb1 * n3;
console.log(chainProb2);
// Find the remainder of dividing the result by the fourth number.
const chainProb3 = chainProb2 % n4;
console.log(chainProb3);

// OR this way:

// const chainProb = ((n2-1) * 3) % n4;
// console.log(chainProb);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isLessThan25 = (n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);
console.log(isLessThan25);
const isValidAgain = isSum50 && isTwoOdd && isLessThan25 && isUnique;
console.log("The result should be false: " + isValidAgain);


// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:

// How many gallons of fuel will you need for the entire trip?
const fuelGallons1 = 1500 / 30;
console.log(fuelGallons1 + " gallons to cover 1,500 miles at 55 MPH.");
const fuelGallons2 = 1500 / 28;
console.log(fuelGallons2 + " gallons to cover 1,500 miles at 60 MPH.");
const fuelGallons3 = 1500 / 23;
console.log(fuelGallons3 + " gallons to cover 1,500 miles at 75 MPH.");

// // Will your budget be enough to cover the fuel expense?
const budget1 = fuelGallons1 * 3;
console.log("$" + budget1 + " needed to cover expenses at 55 MPH..");
const budget2 = fuelGallons2 * 3;
console.log("$" + budget2 + " needed to cover expenses at 60 MPH.");
const budget3 = fuelGallons3 * 3;
console.log("$" + budget3 + " needed to cover expenses at 75 MPH.");

// How long will the trip take, in hours?
const timeTaken1 = 1500 / 55;
console.log(timeTaken1 + " hours to drive the whole trip at 55 MPH.");
const timeTaken2 = 1500 / 60;
console.log(timeTaken2 + " hours to drive the whole trip at 60 MPH.");
const timeTaken3 = 1500 / 75;
console.log(timeTaken3 + " hours to drive the whole trip at 75 MPH.");

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
const result1 = 175 - budget1;
const result2 = 175 - budget2;
const result3 = 175 - budget3;

console.log("At 55 MPH, the fuel cost is $" + budget1 + " and will take " + timeTaken1 + " hours.")
console.log("That left a remainder of $" + result1 + " dollars in the budget");
console.log("At 60 MPH, the fuel cost is $" + budget2 + " and will take " + timeTaken2 + " hours.")
console.log("That left a remainder of $" + result2 + " dollars in the budget");
console.log("At 75 MPH, the fuel cost is $" + budget3 + " and will take " + timeTaken3 + " hours.")
console.log("That left a remainder of $" + result3 + " dollar in the budget");

console.log("The best trip time within budget is 60 MPH.")


// Log the results of your calculations using string concatenation or template literals.

