// console.log('running script ...');


// ==== 'let' variables

// global scope
let x = 32; // global variable

if (true) {
    // block scope
    let x = 100; // block/local variable
    x = 10000
    console.log(x);
}

x = 55;
console.log(x);


console.log('========== Typeof ===========');

const msg = "Hello World!";
const favoriteNum = 3;

console.log(typeof msg);
console.log(typeof favoriteNum);

console.log(typeof 'Javascript');

console.log('========== String Literals ===========');

const frost =
	"Nature's first green is gold, \
Her hardest hue to hold. \
Her early leaf's a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost);


const quote = 'Nature\'s first green is gold, \nHer hardest hue to hold.';
console.log(quote);

const frost2 =
	`Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost2);


const bill = 100;
const tax = 30;

console.log("The bill is " + bill + ", plus tax " + tax + " for a total of " + "$" + (bill + tax));

console.log(`The bill is ${bill}, 'plus tax' ${tax} for a "total" of $${bill + tax}.`);
