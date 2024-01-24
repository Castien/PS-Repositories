// console.log('running');

// let x = "1";

// switch (x) {
//   case "1":
//     console.log("the value is the string 1");
//     break;

//   case "2":
//     console.log("the value is the string 2");
//     break;

//   case "3":
//     console.log("the value is the string 3");
//     break;

//     default:
//         console.log('No value found!');
// }

// === Calculator
// let x = 5;
// let y = 4;
// let operand = "+";

// switch (operand) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     console.log(x / y);
//     break;
//   default:
//     console.log("Invalid Operand");
//     break;
// }

// // ternary

// let currentDay = "Friday";

// const messageOfTheDay =
//   currentDay === "Monday" ? "Happy Monday!" : "Good Morning!";

// console.log(messageOfTheDay);

// // Errors

// let z = 10;

// try {
//   if (z < 0) {
//     console.log("Negative!");
//   } else {
//     throw "Error - I don't know what I'm doing.";
//   }
// } catch (error) {
//   console.log(error);
// }

// console.log("Does this log?");

// let data = "";

// try {
//   // getting data from a db...
//   data = "some data";

//   if (data) {
//     console.log("We got data!");
//   } else {
//     throw "Server is down!";
//   }
// } catch (e) {
//   console.log(e);
// }

// try catch and finally
let w = 10;

let a = 1
let b = 2;

try {
    let c =  a + b;
  if (w > 0) {
    let isEven = w % 2 == 0 ? true : false;
    console.log(isEven);
    
} else if (w <= 0) {
    throw "Error - Value of 0 or below.";
}

} catch (err) {
    console.log(err);

} finally {
  console.log(w);
}
