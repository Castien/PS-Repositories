const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});
