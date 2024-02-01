const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.url);
    res.send('Sending New Products!!')
});


router.post('/', (req, res) => {
    console.log(req.url);
    res.send('Adding new Product')
});


// router.get('/products/:productName', (req, res) => {
//     console.log(req.url);

//     res.send('<h1>Products Page</h1>');
// });

module.exports = router;