// Using anonymous functions to register event listeners
// on each of the elements we're interested in.

// The button.
document.getElementById("myBtn").addEventListener(
    "click",
    () => {
      console.log("Clicked the button!");
    },
    { capture: true }
  );
  
  // The div containing the button.
  document.querySelector("div").addEventListener(
    "click",
    () => {
      console.log("Clicked the containing div!");
    },
    { capture: true }
  );
  
  // The document body (containing the div).
  document.body.addEventListener(
    "click",
    () => {
      console.log("Clicked the body!");
    },
    { capture: true }
  );
  
  // The document HTML element (containing the body).
  document.documentElement.addEventListener(
    "click",
    () => {
      console.log("Clicked the HTML element!");
    },
    { capture: true }
  );
  
  // The document itself.
  document.addEventListener(
    "click",
    () => {
      console.log("Clicked the document!");
    },
    { capture: true }
  );