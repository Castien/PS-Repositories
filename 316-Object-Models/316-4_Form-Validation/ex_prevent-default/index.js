const myForm = document.getElementById("myForm");
const myInput = document.getElementById("myInput");

myInput.addEventListener("keydown", (e) => {
  // We'll only allow lowercase letter characters here.
  const char = e.key;
  const isValid = char >= "a" && char <= "z";

  // Using preventDefault, we can disallow input
  // into the input field. We are telling JavaScript
  // to intercept the normal behavior of "keydown",
  // which is to populate the input's value.
  if (!isValid && char.length === 1) {
    e.preventDefault();
    displayWarning(
      `Please use lowercase letters only.
Entered: ${char}`
    );
  }
});

// Here, we'll create a warning box to display the
// messages we want to show the user when incorrect
// input has been given.
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

// This is the function that displays the warning box.
function displayWarning(msg) {
  // Note how the warning box accepts HTML.
  // This allows us to further format the contents of
  // the warning if desired.
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    myInput.parentNode.insertBefore(warningBox, myInput.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}

// Just for fun, we'll prevent the form's default
// submission, and instead create a little painting
// based on the entered text, without reloading the page.
myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Grab the characters' "numbers."
  const vals = [];
  for (let c of myInput.value) {
    let val = c.charCodeAt(0);
    // Scale the value from 0 to 255.
    val = convertRange(val, [97, 122], [0, 255]);
    vals.push(val);
  }

  // Determine picture "dimensions."
  const len = Math.round(Math.sqrt(vals.length));

  // Build a visual representation of the input.
  const t = document.getElementById("pic");
  t.innerHTML = "";
  for (let x = 0; x < len; x++) {
    const tr = t.appendChild(document.createElement("tr"));
    for (let y = 0; y < len; y++) {
      const td = tr.appendChild(document.createElement("td"));
      const color = vals.shift();
      td.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    }
  }
});

// Little helper function for range scaling.
function convertRange(value, range1, range2) {
  return (
    ((value - range1[0]) * (range2[1] - range2[0])) / (range1[1] - range1[0]) +
    range2[0]
  );
}
