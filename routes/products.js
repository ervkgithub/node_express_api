const express = require('express');
const Products = require('../models/Products');

const router = express.Router();

var colors = require('colors');

//get api for all search
router.get('/', async (req, res) => {
    console.log('inside get api call.')
    try{
        const productslist = await Products.find();
        console.log(productslist);
        res.status(201).json(productslist);
        //res.send('Data from products');
        //console.log(colors.blue('Products page running...'));
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    
})

//get api for search with price
router.get('/searchProduct', async (req, res) => {
    try{
        console.log('------------abcsearchProduct - ', req.query.price);
        let tempPrice = req.query.price;
        const productslist = await Products.find({price: tempPrice});
        console.log(productslist);
        res.status(201).json(productslist);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    
})

//get api for search with id
router.get('/:id', async (req, res) => {
    try{
        console.log(req.params.id);
        let tempId = req.params.id;
        const productslist = await Products.find({productid: tempId});
        console.log(productslist);
        res.status(201).json(productslist);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    
})



//post api to save data
router.post('/', async (req, res) => {
    console.log(colors.bgYellow('Req Object in products api - ', req.body));
    //save this data in database
    



    try{
        const product = new Products({
            productid: req.body.productid,
            productname: req.body.productname,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category
            // productid: 'test123',
            // productname: 'test product 123',
            // price: 1000
        })
        console.log(product);
        const newProductStatus = await product.save();
        console.log(newProductStatus);
        // res.send('data received from api.')
        res.status(201).json(newProductStatus);
    }
    catch(err){
        res.status(400).json({message: err.message})
    }



})


router.get('/productdetails', (req, res) => {
    res.send('Data from product details');
    console.log(colors.blue('Products details page running...'));
})

router.post('/productdetails', (req, res) => {
    console.log(colors.bgYellow('Req Object in products details api - ', req.body));
    //save this data in database
    res.status(202).json({retId: '123123', addStatus: 'success'});
})


router.get('/productdetails/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Data from product details - ${req.params.id}`);
    console.log(colors.blue('Products details page running...'));
})





router.delete('/:id', async (req, res) => {
    try{
        console.log(req.params.id);
        const tempId = req.params.id;
        const response = await Products.deleteOne({productid: tempId});
        res.status(201).json(response);
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
})


router.put('/updatePrice', async (req, res) => {
    try{
        console.log(req.body);
        // const productslistOne = await Products.findOne({productid: req.body.productid});
        // console.log(productslistOne);
        const tempProduct = new Products({
            productid: 'id1234',
            productname: 'name new',
            price: 5000
        })
        const response = await Products.findOneAndUpdate({productid: 'id123'}, tempProduct, {new: true} );
        res.status(201).json(response);
    }
    catch(err) {

    }
})




module.exports = router;