import "./styles.css";

// Aliases are useful for shortening the amount of
// code you need to type, but be careful using them.
// Other developers that inspect or maintain your
// code may not immediately understand what is going
// on without context.

//arrow function takes parameter 's' and 
//passes to 'createElement' to creat a new element
const newEl = (s) => document.createElement(s);

//retrieving element with id = "app"
const app = document.getElementById("app");

//creating variables that append new 'div' elements to app
const d1 = app.appendChild(newEl("div"));
const d2 = app.appendChild(newEl("div"));

//literal representation
d1.textContent = `<p>This element was created with 
<code>textContent</code>, so all of the HTML tags are 
being <b>ignored</b>. This is all treated <i>as plain 
text</i>.</p>`;

//plaintest representation
d2.innerHTML = `<p>This element was created with 
<code>innerHTML</code>, so all of the HTML tags are 
being <b>processed as HTML</b>. This allows us to 
create <i>multiple styled elements</i> within the node.</p>`;

// // create a new element
// const pEl = document.createElement("p");
// // setting the text of the element
// pEl.innerHTML = "This <code><p></code> element will change it's style.";
// // appends the p element to the second div
// d2.appendChild(pEl);

// pEl.style.border = "2px solid red";
// pEl.style.padding = "55px";
// pEl.style.backgroundColor = "hotpink";

// // create anchor
// const anchorEl = document.createElement("a");
// // sets the text content
// anchorEl.textContent = "Google";
// // sets href attribute of the anchor tag
// anchorEl.setAttribute("href", "http://www.google.com");
// // appends the anchor to the second div
// d2.appendChild(anchorEl);

// console.log(anchorEl);

// const button = document.querySelector("button");
// console.log(button);

// document.body.classList.add("light");

// button.addEventListener("click", function () {
//   if (document.body.classList.contains("light")) {
//     document.body.classList.replace("light", "dark");
//   } else if (document.body.classList.contains("dark")) {
//     document.body.classList.replace("dark", "light");
//   }
// });
