const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Sending product info...')
});


router.post('/create', (req, res) => {
    res.send('Creating a new product...')
});


module.exports = router;