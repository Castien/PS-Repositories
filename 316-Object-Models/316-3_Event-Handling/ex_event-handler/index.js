// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// // logic

// function addComment() {
//     console.log(cInput);
//     // access and store the text from the input
//     const text = cInput.value;
//     // create a new li
//     const li = document.createElement("li");
//     // set the textContent to the text from the input
//     li.textContent = text;
//     // append it to the ul
//     cList.appendChild(li);
//     // clears the value in the input
//     cInput.value = "";
//     // focus or go back to the input
//     cInput.focus();
//   }
  
//   // register event listener to the button
//   cBtn.addEventListener("click", addComment);


  
// The function to handle adding new comments.
function addComment() {
    const newComment = cInput.value;
  
    // This wasn't in the instructions, but
    // we added a guard against empty comments:
    if (newComment === "") return;
  
    cList.appendChild(document.createElement("li")).textContent = newComment;
    cInput.value = "";
    cInput.focus();
  }
  
  // Register the event listener.
  cBtn.addEventListener("click", addComment);