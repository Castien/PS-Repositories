console.log("running script...");

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log(form["email"].value);
  console.log(form["password"].value);

  const formData = {
    email: form["email"].value,
    password: form["password"].value,
  };

  const res = await fetch(
    "http://localhost:4000/api/users",
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    },
    
  );
  
  const data = await res.json()
  console.log(data);
});
