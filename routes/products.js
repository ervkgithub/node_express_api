const express = require('express');

const router = express.Router();

var colors = require('colors');


router.get('/', (req, res) => {
    res.send('Data from products');
    console.log(colors.blue('Products page running...'));
})


router.get('/productdetails', (req, res) => {
    res.send('Data from product details');
    console.log(colors.blue('Products details page running...'));
})


router.get('/productdetails/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Data from product details - ${req.params.id}`);
    console.log(colors.blue('Products details page running...'));
})


module.exports = router;