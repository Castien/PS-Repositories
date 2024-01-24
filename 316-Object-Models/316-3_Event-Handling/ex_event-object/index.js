const app = document.getElementById("app");

// Create the initial circle to be attached to the mouse.
const mouseCircle = createCircle();
app.appendChild(mouseCircle);

// Helper function for making circles.
function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  newColors(circle);
  return circle;
}

// Helper function for placing circles.
function placeCircle(circle) {
  const copy = circle.cloneNode(true);
  app.appendChild(copy);
}

// Helper function for generating new colors.
function newColors(circle) {
  circle.style.backgroundColor = `rgba(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )}, 255)`;
}

// Place the mouse circle at the current location,
// and switch the circle to a new color.
function handleClick() {
  placeCircle(mouseCircle);
  newColors(mouseCircle);
}

// Create a "painting" effect with pointerdown
// and pointerup. Cache the interval for cancelling.
let paintInterval;
function handleStart() {
  paintInterval = setInterval(() => placeCircle(mouseCircle), 10);
}
function handleEnd() {
  clearInterval(paintInterval);
  setTimeout(() => newColors(mouseCircle), 0);
}

// Moves the mouse circle alongside the mouse.
function handleMove(e) {
  mouseCircle.style.top = e.y - 25 + "px";
  mouseCircle.style.left = e.x - 25 + "px";
}

// Register events!
app.addEventListener("click", handleClick);
app.addEventListener("pointerdown", handleStart);
app.addEventListener("pointerup", handleEnd);
app.addEventListener("pointermove", handleMove);
