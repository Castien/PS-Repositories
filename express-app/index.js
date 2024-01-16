// create an application by running (calling) express() and caching the return as a variable, typically called app
const express = require("express");
const app = express();

// tell the app to listen to a particular port, same syntax as with Node's built-in http module's createServer technique
const port = 3000;


const things = require("./routes/things");
//middleware
//use the things.js file to handle endpoints that start with /things
app.use(express.json());
// path, router object
app.use("/things", things);


// Express requires us to define routes
// By default, the web client is asking for the base route "/" from the server using an HTTP GET request
// Express routes have the following structure:

// app.method(path, handler)
// app is the instance of Express.
// method is the HTTP request method, in lowercase (GET, POST, DELETE, etc.).
// path is the URL path on the server, the endpoint.
// handler is the function executed when the route is matched.

// res.download()	Prompt a file to be downloaded.
// res.end()	End the response process.
// res.json()	Send a JSON response.
// res.jsonp()	Send a JSON response with JSONP support.
// res.redirect()	Redirect a request.
// res.render()	Render a view template.
// res.send()	Send a response of various types.
// res.sendFile()	Send a file as an octet stream.
// res.sendStatus()	Set the response status code and send its string representation as the response body.

// Creating GET Routes
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

app.get("/user", (req, res) => {
    res.send("Received a GET request for user!");
});

// Creating POST Routes
app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
});

/**
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd - zero or more of the character before ?
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc - one or more of the character before +
 * "/ab*cd" - "/ab" + anything + "cd" - wildcard, starting with ab and ending with cd
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 * ^ - Anything that starts with
 * (cd)? - groups the characters, zero or more of the combination
 */

// Route parameters are named segments of a URL, preceded by a colon (:),
// that are used to cache certain values, specified at their position in the URL.
// These values are cached in the req.params object, 
// with the name of the route parameter as the key used to access its value.
//   For example (a live example of this will follow):
//   For a route path: /users/:userID/profile/:data
//   and a request URL: http://localhost:3000/users/42/profile/43110
//   req.params contains: { userID: "42", data: "43110" }

app.get("/user", (req, res) => {
    res.send(`Received a GET request for user!
  Try navigating to /user/somevalue/profile/somevalue.`);
  });
  
  app.get("/user/:userID", (req, res) => {
    res.send(`Navigated to the user page for: ${req.params.userID}.`);
  });
  
  app.get("/user/:userID/profile", (req, res) => {
    res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
  });
  
  app.get("/user/:userID/profile/:data", (req, res) => {
    res.send(
      `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
    );
  });

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
  });

