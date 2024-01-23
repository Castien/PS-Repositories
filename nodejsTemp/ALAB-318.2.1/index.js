const express = require('express');
const morgan = require('morgan');
const dvd = require('./dvd');
const path = require('path');
const app = express();

app.set('view engine', 'ejs'); // Set the view engine to EJS

// Setting up Express static middleware for files in the folder
app.use(express.static(path.join(__dirname, 'images')));

// Use Morgan middleware for logging
app.use(morgan('dev'));

app.use(express.json());
app.use('api/animeigo/dvd', dvd);

// Route to handle file download
app.post('/download', (req, res) => {
  const imagePath = req.body.imagePath;
  res.download(path.join(__dirname, 'images', imagePath));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


