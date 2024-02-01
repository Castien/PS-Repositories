const express = require('express');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

// middleware function
const logger = (req, res, next) => {
    console.log(`Received request to route ${req.url}`);
    next();
}
app.use(logger);
app.use('/products', productsRoutes);

// Error Middleware
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});



/**
 * GET '/'
 */
app.get('/', (req , res) => {
    console.log(req.url);
    // throw Error('Something went really bad!');

    res.send('<h1>Hello Express</h1>');
});



app.get('/user', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('Sending the user info!');
});

app.post('/user', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('Creating new user....')
});


app.get('/user/:userID', (req, res) => {
    console.log('Params Object ==>', req.params.userID);

    res.send('test')
});


app.get('/user/:userID/profile/:data', (req, res) => {
    console.log(req.params);

    res.send(`Sending Profile for User: ${req.params.userID}`);
});

app.get('/user/:username/:password', (req, res) => {
    console.log(req.params);

    res.send(`Sending Profile for User: ${req.params.userID}`);
});

app.get('/flights/:from-:to', (req, res) => {
    console.log(req.params);

    res.send('Sending flights info!')
});

app.get('/shop/:brand', (req, res) => {
    console.log(req.params.brand);
    res.send('Sending products....')
});


app.route('/learner')
    .get((req, res) => {
        console.log(req.url);
        res.send('Sending learner data')
    })
    .post((req, res) => {
        console.log(req.url);
        res.send('Creating new learner')
    });



app.listen(PORT, () => {
    console.log(`Server is running!`);
});