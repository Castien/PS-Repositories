// // ====
// // let username = 'Alex';
// // console.log(username);

// // const myObject = {
// //     print: function() {
// //         console.log('Hello');
// //     }
// // }
// // myObject.print(username);

// // === Function Declaration
// function addTwoNumbers(a, b) {
//   // code goes here
// }

// sayHi("Bob");

// function sayHi(name) {
//   console.log(`Hello ${name}`);
// }

// // calling the function
// // addTwoNumbers(2, 3);

// sayHi("Lea");
// sayHi("Kyle");

// const sayHello = function (name) {
//   console.log(`Hello ${name}`);
// };

// sayHello("Ana");

// fnDeclaration(); // thank you function declarations :)

// function fnDeclaration() {
//   console.log("I'm coming from a function declaration.");
// }

// const fnExpression = function () {
//   console.log("I'm coming from a function expression.");
// };

// fnExpression(); // TypeError: fnExpression is not a function

// // function declaration
// function add(a, b) {
//   return a + b;
// }

// const result = add(2, 3);
// console.log(result);

// // arrow function
// const multiply = (a, b) => {
//   return a * b;
// };

// const newResult = multiply(3, 3);

// console.log(newResult);


// // function declaration
// function areBothEven(n1, n2) {
//   return !(n1 % 2) && !(n2 % 2);
// }

// const result3 = areBothEven(2, 5);
// console.log(result3);


// // Arguments Array like
// // function getDevObject(name) {
// //     const skills = [];

// //     for (let i = 1; i < arguments.length; i++) {
// //         skills.push(arguments[i]);
// //     }

// //     return {
// //         devName: name,
// //         jobSkills: skills
// //     }
// // }

// function getDevObject(name, role, ...skills) {
//     return {
//         devName: name, 
//         role, role,
//         jobKills: skills
//     }
// }

// // getDevObject('Maria', 'HTML', 'CSS', 'JS', 'React');

// const devObj = getDevObject('Maria', 'frontend', 'HTML', 'CSS', 'JS', 'React');

// console.log(devObj);


// // Default Parameter
// function setColor(bike, brand, color = 'black', size = 20) {
//   bike.color = color;
//   bike.brand = brand;
//   bike.size = size; 
// }

// const b1 = {}

// setColor(b1, 'some brand', 'purple');

// console.log(b1);

// const b2 = {}
// setColor(b2, 'brand2', 'hot pink', 18);
// console.log(b2);

// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(element) {
//   console.log(element.toUpperCase());
// });

// (function() {
//   console.log('running function script');
// })();


// function hoist() {
// 	console.log(x);  // outputs undefined, not a ReferenceError
// 	let x = 25;
// 	console.log(x);  // outputs 25
// }

// hoist();

// let x = 5;

// {
//   console.log(x);
//   let x = 6;
// }

// let myVar = 20;

// function passBy(x) {
//   x = x * 10;
// }

// console.log(myVar);           // 20
// console.log(passBy(myVar));   // 200
// console.log(myVar);  // 20


// let a = 10;
// let b = a; // copy the value of a

// a = 100;

// console.log(a);
// console.log(b);

// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//     x.value = x.value * 20;
// }

// console.log(myVar);           // 20
// passBy(myVar);                // 200
// console.log(myVar);   // 400

// const user1 = {name: 'alex'};

// const user2 = user1 ;

// user1.name = 'max';

// console.log(user1);
// console.log(user2);

// let numArray = [
//   { value: 10 },
//   { value: 20 },
//   { value: 0 },
//   { value: -10 }, 
//   { value: 15 }, 
//   { value: 28 }, 
//   { value: -1000 },
//   { value: 42 },
//   { value: 7 }
// ];

// function returnEven(array) {
//   let newArray = [];

//   array.forEach((element) => {
//       if (element.value % 2 == 0) {
//           newArray.push(element);
//       }
//   });

//   return newArray;
// }

// let newArray = returnEven(numArray);

// newArray[0].value += 10;

// numArray[3].value = 67;

// let myEvenValue = newArray[1].value;
// myEvenValue /= 2;

// console.log(numArray[0]);
// console.log(numArray[3]);



function printCool(name) {
  return `${name} is cool!`
}

console.log(printCool("Captain Reynolds")); 
console.log(printCool("Max")); 

const result = printCool('alex');
console.log(result);



function calculateCube(n) {
  return n ** 3;
}

console.log(calculateCube(5));


// D 
function isVowel(char) {
  char = char.toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

console.log(isVowel("g"));