// Exercise
// Write some for loops to accomplish the following tasks:

// Count down from 10 to 1.
// Output odd numbers from 1 to 10.
// Output even number from 1 to 10.
// Output multiples of 3, starting at 6 and ending at 60.
// Output an increasing number of # symbols, from 1 to 7, as shown below.
// #
// ##
// ###
// ####
// #####
// ######
// #######
// Now, write a for loop that iterates from 1 to 20. The loop should:

// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.

// Exercise
// Write while loops to accomplish the following tasks:

// Count down to 0 from a given number.
// let countdown = 5;
// console.log(countdown);
// while (countdown > 0) {
//     countdown--;
//     console.log(countdown);
// }

// Log integers in multiples of 3 as long as they are less than 35.
// let multithree = 0;
// while (multithree < 35) {
//     if(multithree % 3 == 0) {
//         console.log(multithree)
//     }
//     multithree++;
// }


// Print integers in multiples of 5 as long as they are less than 100.
// let multifive = 0;
// while (multifive < 100) {
//     if(multifive % 5 == 0) {
//         console.log(multifive + " ")
//     }
//     multifive++;
// }



// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// let conditionalone = 0;
// while (conditionalone < 20) {
//     if (conditionalone % 2 == 0) {
//         console.log(conditionalone * 3);
//     }
//     conditionalone++;
// }


// Print all prime numbers between 0 and 20.
// Bonus Logical Question
// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

const snackCost = 4 * 4;
const money = 10 * 4;
let change = (money - snackCost);
let q = 0;
while (change > 0) {
    q++
    change--;
    if (change == 0) {
        console.log(q);
    }
}
