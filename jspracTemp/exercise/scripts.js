// Exercise
// Open a code editor and create a file that will run some JavaScript code. Inside of the file:

// Declare a variable called num.
// Write a conditional statement that checks if the num is positive or negative.

const num1 = 13;
if (num1 == 0) {
    console.log("Number is zero.")
}
else if (num1 > 0) {
    console.log("Number is positive.")
}
else {
    console.log("Number is negative.")
}

// Once you have completed the above:
// Change the value of the variable.
// Save & open it again.

// If you were tasked with setting up the security for a web site that only grants access to users over the age of 18, how would you write a conditional that gives users who are 18 or older access, and logs "Access Denied" for users who do not meet the given condition? Give it a try!

const num2 = prompt("Enter age: ");

if (num2 <= 19) {
        console.log("Access Granted");
} 
else {
    console.log("Access Denied");
}

// Exercise
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.

const num3 = 125;
if (num3 > 0) {
    if (num3 > 100) {
        console.log("Number is positive and greater than 100.")
    }
    else if (num3 < 100) {
        console.log("Number is positive and less than 100.")
    }
}
else if (num3 < 0) {
    console.log("Number is negative.")
}


// Exercise
// Write an if..else statement for the following requirements:

// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

if (grade >= 90) {
    console.log("A")
}
else if (grade < 90 && grade >= 80) {
    console.log("B")
}
else if (grade < 80 && grade >= 70) { 
    console.log("C")
}
else if (grade < 70 && grade >= 55) {  
    console.log("D")
}
else if (grade < 55) {  
console.log("F")
}
