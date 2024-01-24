// Asynchronous code, in JavaScript, is code which does not block the execution of further logic while it is "waiting" to complete. It enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

// laundry = "colors", "whites", "darks", "towels", "bedding" 

// JavaScript Objects:
// An object in programming is an entity that can contain data (properties) and behaviors (methods). 
// They consist of key-value pairs, where each key is a property and its associated value can be of any data type.

// Using the example context of laundry, an object could represent the overall laundry process.
// We create an object named laundryProcess containing properties for each type of laundry load.
// They are initially empty arrays where clothes will be stored once sorted.

const laundryProcess = {
  colors: [],   // Represents the 'colors' load
  whites: [],   // Represents the 'whites' load
  darks: [],    // Represents the 'darks' load
  towels: [],   // Represents the 'towels' load
  bedding: []   // Represents the 'bedding' load

  // Functions related to laundry could be added here
};


// Functions:
// Functions are blocks of reusable code designed to perform a particular task when called.

// We define a function called sortClothes that will put clothes into their respective loads:
// The sortClothes function takes two parameters: 
// item = an article of clothing, and loadType = which type of laundry load the item belongs to. It pushes the item into the respective load array within the laundryProcess object and logs a message indicating the action.

function sortClothes(item, loadType) {
  laundryProcess[loadType].push(item);
  console.log(`${item} added to ${loadType} load.`);
}

// Classes:
// Classes  are a template for creating objects (think blueprints for a house). 
// They define the structure and behavior that objects should have.

// We create a class called LaundryMachines to represent the whole laundry process:
// The LaundryMachines class has properties for each type of laundry load and a sortClothes method, similar to the previous sortClothes function.

class LaundryMachines {
  constructor() {
    this.colors = [];
    this.whites = [];
    this.darks = [];
    this.towels = [];
    this.bedding = [];
  }

  sortClothes(item, loadType) {
    this[loadType].push(item);
    console.log(`${item} added to ${loadType} load.`);
  }
}

// Promises:
// Promises are used for asynchronous operations. They represent a value that may not be available yet but will be resolved at some point in the future.

// We create a function called startWashing that performs an asynchronous process of washing clothes.
// The startWashing function takes a loadType parameter and returns a Promise of a future return. 
// After the delay (representing the washing time), it either resolves if there are clothes in the specified load or rejects if the load is empty.

function startWashing(loadType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (laundryProcess[loadType].length > 0) {
        resolve(`Finished washing ${loadType} load.`);
      } else {
        reject(`Nothing to wash in ${loadType} load.`);
      }
    }, 5000); // 5-seconds
  });
}



// We can perform the whole laundry process using promises to perform the washing function, the drying funtion and then when all are complete, we can proceed to folding.

// Laundry process object
const laundryProcess = {
    colors: ['red', 'blue', 'green'],
    whites: ['white', 'cream'],
    darks: ['black', 'navy'],
    towels: ['blue towel', 'white towel'],
    bedding: ['bedsheet', 'pillowcase']
  };
  
  // Functions for washing and drying
  
  function wash(loadType) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (laundryProcess[loadType].length > 0) {
          console.log(`Washing ${loadType} load...`);
          resolve(`Finished washing ${loadType} load.`);
        } else {
          reject(`No clothes to wash in ${loadType} load.`);
        }
      }, 3000); // 3-second washing
    });
  }
  
  function dry(loadType) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Drying ${loadType} load...`);
        resolve(`Finished drying ${loadType} load.`);
      }, 3000); // 3-second drying
    });
  }
  
  // Function to start the laundry
  
  function startLaundry() {
    const loadTypes = Object.keys(laundryProcess);
  
    const washPromises = loadTypes.map(loadType => wash(loadType));
    const dryPromises = loadTypes.map(loadType => dry(loadType));
  
    return Promise.all([...washPromises, ...dryPromises])
      .then(results => {
        results.forEach(result => {
          console.log(result);
        });
        console.log("All laundry loads have been washed and dried.");
        return "Laundry is ready to be folded!";
      })
      .catch(error => {
        console.error("Error during laundry:", error);
      });
  }

  // Start the laundry

startLaundry()
.then(result => {
  console.log(result);
  console.log("Now folding the laundry...");
  // Perform folding here...
})
.catch(error => {
  console.error("Error while starting laundry:", error);
});






// // create a new variable for the promise function
// // 'promise' object takes one parameter:
// // parameter is a function which gets passed to variables:
// // 'resolve' and 'reject', which are the parameters of the promise object
// let promisesPromises = new Promise((resolve, reject) => {
//     //create the definition of the function 
// })


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
