const express = require('express');
const router = express.Router();
const dvdData = require('./dvd.json');

router.get('/', (req, res) => {
  res.json(dvdData);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(dvdData.filter((entry) => entry.id === parseInt(id)));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  dvdData.push(body);
  res.json({ message: 'The DVD entry has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  dvdData.forEach((entry, index) => {
    if (entry.id === parseInt(id)) {
      dvdData[index] = body;
    }
  });
  res.json({ message: `The DVD entry with ID ${id} has been updated` });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  dvdData.forEach((entry, index) => {
    if (entry.id === parseInt(id)) {
      dvdData.splice(index, 1);
    }
  });
  res.json({ message: `DVD entry with id #${id} has been deleted` });
});

module.exports = router;
