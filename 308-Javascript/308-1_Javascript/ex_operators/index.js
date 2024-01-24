console.log( 3 + 3);
console.log( 5 - 3);
console.log( 5 * 3);
console.log( 10 / 2);
console.log( 10 % 2);
console.log( 10 % 3);

console.log('===================');

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);


let newNumber = 9;
newNumber -= 3; // newNumber is now equal to 6
newNumber /= 3; // newNumber is now equal to 2
newNumber *= 3; // newNumber is now equal to 6
newNumber %= 3; // newNumber is now equal to 0

console.log(newNumber);

let num3 = 5;

console.log(num3);
num3++ // 6

console.log(num3);

num3-- // 5
num3-- // 4
console.log(num3);

console.log('===================');
let num4 = 9;

let currentNumber = num4++;

console.log(currentNumber);
console.log(num4);

console.log('========= Comparison==========');

console.log( 3 > 4);
console.log( 5 < 10);
console.log( 78 >= 90);   
console.log( 58 <=  44);   
console.log( 10 == 10);   
console.log( 10 != 30);   

let isEqual = 3 === '3';
console.log(isEqual);


console.log('========= Logical Ops ==========');
let op1 = 3 > 2 && 6 == 6; // true
console.log(op1);

let op2 = 3 > 2 && 6 == 7; // false
console.log(op2);

let op3 = 3 > 2 || 6 == 6; // true
console.log(op3);

let op4 = 3 > 2 || 6 == 7; // true
console.log(op4);

console.log(!true);

let op5 = !(3 > 2 && 6 == 6); // thisLogic is false
console.log(op5);

let op6 = !(3 > 2 || 6 == 7); // thisLogic is false
console.log(op6);


console.log('========= Concatenation ==========');

const sentence = "Hello" + " " + "World!";
console.log('The number is ' + 5);

console.log(sentence);
console.log(sentence[6]);



let msg = "Hello world";

msg[1, 6];

console.log(msg);

console.log('a' < 'b');
