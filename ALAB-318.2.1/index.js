const express = require('express');
const morgan = require('morgan');
const port = 3000;
const dvd = require('./dvd');

const app = express();

app.set('view engine', 'ejs'); // Set the view engine to EJS

// Use Morgan middleware for logging
app.use(morgan('dev'));

app.use(express.json());
app.use('/dvd', dvd);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

