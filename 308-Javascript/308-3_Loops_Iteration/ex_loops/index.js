console.log('Running');

// for (let counter = 0; counter < 10; counter++) {
//     console.log(`Counter is: ${counter}`);
// }

console.log('Some other code');

// count down from 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(`I is : ${i}`);
// }

// Output even number from 1 to 10.
// for (let i = 1; i <= 10; i++) {

//     console.log(`Now checking ${i}`);

//     if (i % 2 == 0) {
//         console.log(`${i} is even!`);
//     } else {
//         console.log(`${i} is odd!`);

//     }
// }

// Output multiples of 3, starting at 6 and ending at 60.
// for (let i = 6; i <= 60; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} is a multiple of 3`);
//     } else {
//         console.log(`${i} is NOT a multiple of 3`);
//     }
// }

//Output an increasing number of # symbols, from 1 to 7, as shown below.
// let symbol = '';

// for (let i = 1; i <= 7; i++) {

//     symbol+= '#';

//     console.log(symbol);
// }


// loop over string
let str = "Hello World";

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// ======= continue keyword
// for (let i = 0; i < str.length; i+= 2) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }


// for (let i in str) {
//     console.log(str[i]); //properties
// }

// for (let i of str) {
//     console.log(i); // values
// }

// object
const obj = {
    name: 'max',
    age: 22,
    role: 'developer'
}

// for (let key in obj) {
//     console.log(obj[key]);
// }

// array
// const arr = ['Ana', 22, 'developer'];

// for (let value of arr) {
//     console.log(value);
// }


//* ===========  While Loops

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }


// for (x = x/2 - 1; x >= 0; x = x/2 - 1) {
    // 	if (x % 1 != 0) {
        // 		break;
        // 	}
        
        // 	console.log(x);
        // }
        
// let x = 30;
// while (x >= 0) {
//     x = x/2 - 1;

//     if (x % 1 != 0) {
//         break;
//     }
    
//     console.log(x);
// }

//? Count down to 0 from a given number.

// let x = 10;

// while (x >= 0) {
//     console.log(x);
//     x--;
// }

// ? Log integers in multiples of 3 as long as they are less than 35.
// let x = 0;

// while (x < 35) {
//     if (x % 3 == 0 && x !== 0) {
//         console.log(x);
//     }
//     x++;
// }


/*? Print integers between 0 and 20 with the following conditions:

    All numbers divisible by 2 should be multiplied by 3 before they are output.

    All other integers should not be output. 
*/

// let x = 0;

// while (x < 20) {

//     if (x % 2 == 0) {
//         console.log(x * 3);
//     } 
//     x++
// }

/*
    Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

    Write a loop that outputs how many quarters Romeo received.

*/

// const cookiePrice = 4;
// const dollarBill = 10;
// const change = dollarBill - cookiePrice;
// console.log(change); // 6

// let numberOfQuarter = 0;

// while (numberOfQuarter < (change / 0.25)) {
//     numberOfQuarter++
// }

// console.log(numberOfQuarter);


// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 0);


// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			break;
// 		}
// 	}
// }

// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			continue myLoop;
// 		}
// 	}
// }