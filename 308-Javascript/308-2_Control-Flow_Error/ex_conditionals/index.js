// code block

// let x = 10; //global scope
// let y = 5; // global scope

// let msg = "hello";

// new code block
// {
// 	let z = x + y; // local or block scope
// 	console.log(z);
// }

//*  var keyword
// {
//     var x = 1;
//     {
//         var x = 2; // same variable!
//         console.log(x); // 2
//     }
//     console.log(x); // 2
// }

//*  let keyword
// {
//   let x = 1;
//   {
//     let x = 2; // different variable
//     console.log(x); // 2
//   }
//   console.log(x); // 1
// }

// Nested scopes
let x = 100; // global scope

{
  // block scope Layer #1
  let y = 5;
  {
    // block scope Layer #2
    let z = x + y;
    console.log(z);
  }
}

// conditional statement or control flow
// if (x == 10) {
//     console.log('We found x!');
// } else {
//     console.log('X is not found');
// }

// let a = 5;

// if (a > 0) {
// 	console.log('Positive!');
// } else {
// 	console.log('Negative.');
// }

if (42) {
  console.log("true");
}
if ("0") {
  console.log("true");
}
if ("false") {
  console.log("true");
}
if (-0) {
  console.log("true?");
}
if (Infinity) {
  console.log("true");
}
if (" ") {
  console.log("true?? ");
}


const user = 'alex';

if (user) {
    console.log(`Welcome ${user}`);
} else {
    console.log('Welcome Guest');
}

// Nested if else

const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn) {
    console.log('Welcome!');

    if (isAdmin) {
        console.log('Admin User');
    } else {
        console.log('Default User');
    }

} else {
    console.log('You must be logged in!');
}

const age = 14;

if (age <= 15) {
    console.log('Little league');

} else if (age >= 16 && age <= 18) {
    console.log('Junior League');

} else {
    console.log('Major League!');
}