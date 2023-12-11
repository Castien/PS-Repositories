//Asynchronous code, in JavaScript, is code which does not block the execution of further logic while it is "waiting" to complete. It enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.


// create a new variable for the promise function
// 'promise' object takes one parameter:
// parameter is a function which gets passed to variables:
// 'resolve' and 'reject', which are the parameters of the promise object
let promisesPromises = new Promise((resolve, reject) => {
    //create the definition of the function 
})






// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");


// // Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Guess this worked!");
//     }, 1000);
// });

// // Add some then() methods to handle additional tasks.
// myPromise
//     .then((x) => x + ' Again?')
//     .then((x) => x + ' Third time!')
//     .then((x) => x + ' Promises are cool.')
//     .catch((err) => {
//         console.error(err);
//     })

// new Promise((resolve, reject) => {
//     console.log("Initial");

//     resolve();
// })
//     .then(() => {
//         throw new Error("Something failed");

//         console.log("Do this");
//     })
//     .catch(() => {
//         console.error("Do that");
//     })
//     .then(() => {
//         console.log("Do this, no matter what happened before");
//     });

// const noPromises = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Cool guys don't look at explosions.")
//     }, 1000)
// })

// noPromises.then(function(value){
//     document.getElementById('demo'),
//     innerHTML = value
// })

// const myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code.
//     // In reality, you will probably be using something like XHR or an HTML API.
//     setTimeout(() => {
//       resolve("Success!"); // Yay! Everything went well!
//     }, 250);
//   });
  
//   myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log(`Yay! ${successMessage}`);
//   });
