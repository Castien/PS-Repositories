const express = require('express');
const router = express.Router();
const dvdData = require('./dvd.json');

//JSON Format:

// router.get('/', (req, res) => {
//   res.json(dvdData);
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   res.json(dvdData.filter((entry) => entry.id === parseInt(id)));
// });

// router.post('/', (req, res) => {
//   const body = req.body;
//   console.log(body);
//   dvdData.push(body);
//   res.json({ message: 'The DVD entry has been added' });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   dvdData.forEach((entry, index) => {
//     if (entry.id === parseInt(id)) {
//       dvdData[index] = body;
//     }
//   });
//   res.json({ message: `The DVD entry with ID ${id} has been updated` });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   dvdData.forEach((entry, index) => {
//     if (entry.id === parseInt(id)) {
//       dvdData.splice(index, 1);
//     }
//   });
//   res.json({ message: `DVD entry with id #${id} has been deleted` });
// });

//EJS Format:

// Creating a new DVD
router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  dvdData.push(body);
  res.json({ message: 'The DVD entry has been added' });
});

// Read the list of DVDs
router.get('/', (req, res) => {
  res.render('dvd-list', { dvdData });
});

// Read details of a specific DVD
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const dvdEntry = dvdData.find(entry => entry.id === parseInt(id));

  if (dvdEntry) {
    res.render('dvd-details', { dvdEntry });
  } else {
    res.status(404).render('not-found');
  }
});

// Updating a DVD
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const index = dvdData.findIndex(entry => entry.id === parseInt(id));

  if (index !== -1) {
    dvdData[index] = body;
    res.json({ message: `The DVD entry with ID ${id} has been updated` });
  } else {
    res.status(404).json({ message: 'DVD entry not found' });
  }
});

// Deleting a DVD
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = dvdData.findIndex(entry => entry.id === parseInt(id));

  if (index !== -1) {
    dvdData.splice(index, 1);
    res.json({ message: `DVD entry with id #${id} has been deleted` });
  } else {
    res.status(404).json({ message: 'DVD entry not found' });
  }
});

module.exports = router;

