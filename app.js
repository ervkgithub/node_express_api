const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => {
    res.send('My First Express Page...');
    console.log(colors.red('My First Express Page...'));
    //logger libraries
})


app.get('/about', (req, res) => {
    console.log(colors.red('My About Page...'));
    res.send('<h2>My About Page</h2>');
})

app.get('/contactdata', (req, res) => {
    console.log(colors.red('My contact data...'));
    const tempObj = {
        name: 'test',
        age: 123,
        status: false
    }
    res.send(tempObj);
    console.log(colors.red('My contact data...'));
    console.log(colors.blue(req.header));
    console.log(colors.blue(res.body));
})


const productsRoute = require('./routes/products');
app.use('/products', productsRoute);


app.listen(4000);