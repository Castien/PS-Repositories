//Selecting DOM Elements:

// const app = document.getElementById("app");
// console.log(app.innerText);

// const selects = document.getElementsByName("selectBy");
// console.log(selects);

// const codeEl = document.querySelector("code");
// console.log(codeEl);

// const app2 = document.querySelector("#app");
// console.log(app2);

// const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

//Use querySelector to select an element and assign it to a variable. 
//Print that element's parentNode, childNodes, and nextElementSibling properties to the console.

// const randomVariable = document.querySelector("body");
// console.log(randomVariable.parentNode);
// console.log(randomVariable.childNodes);
// console.log(randomVariable.nextElementSibling);

//HTMLCollections

// const inputs = document.getElementsByTagName("input");

// for (let input of inputs) {
//   console.log(input);
// }

// //querySelectorAll with CSS Selectors:
// //select all of the visited links that are direct children of a nav element
// document.querySelectorAll("nav > a:visited");


// //NodeList vs. HTMLCollection
// //In order to use Array class methods on either object, you must call them indirectly.
// let li = document.getElementsByTagName(`li`);
// let my Array = Array.prototype.slice.call(li, 1, 3);


//Manipulating DOM

//Creating Elements:

const rows = 5;
const cols = 10;
//app called above is commented out
const app = document.getElementById("app");
const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");

    // Sneak peek at what's coming next!
    // After creating an element, it needs
    // to be added to the DOM tree.
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

app.appendChild(table);


// const app = document.getElementById("app");

// You can create a nested structures by
// chaining appendChild() calls together.
app
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li")).textContent = "Nested structures!";



