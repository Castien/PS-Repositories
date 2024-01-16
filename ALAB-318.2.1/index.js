const express = require('express');
const morgan = require('morgan');
const port = 3000;
const dvd = require('./dvd');

const app = express();

// Use Morgan middleware for logging
app.use(morgan('dev'));

app.use(express.json());
app.use('/dvd', dvd);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
