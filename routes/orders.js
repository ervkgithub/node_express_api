const express = require('express');
const Orders = require('../models/Orders');
const jwt = require('jsonwebtoken');

const router = express.Router();

const verifyJwt = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) {
        res.status(400).json({err: 'Token Missing'});
    }
    else {
        jwt.verify(token, "altudo", (err, decoded) => {
            if(err) {
                res.status(400).json({err: 'Invaid Token'});
            }
            else {
                //validated user
                next();
            }
        })
    }
}

// http://localhost:4000/orders/placeorder
router.post('/placeorder', verifyJwt, async (req, res) => {
    // console.log('inside placeorder api - ', req.body);
    try{
        const tempOrder = new Orders({
            orderid: parseInt(Math.random()*10000000000),
            username: req.body.username,
            orderdate: (new Date).toLocaleDateString(),
            deliverydate: '',
            amount: req.body.amount,
            mobile: req.body.mobile,
            pincode: req.body.pincode,
            address: req.body.address,
            paymentmode: req.body.paymentmode,
            paymentstatus: req.body.paymentstatus,
        })
        const response = await tempOrder.save();
        //console.log('inside placeorder api response - ', response)
        res.status(201).json(response);

        //*****store details in order details table
    }
    catch(err) {
        //console.log('inside placeorder api error - ', err)
        res.status(400).json({message: err.message});
    }
})


//API 8
router.get('/allorders', async(req, res) => {
    try{
        const response = await Orders.find();
        res.status(200).json(response);
    }
    catch(err) {
        res.status(400).json(err)
    }
})

//API 9
router.get('/orderbyuser/:username', async(req, res) => {
    try{
        const tempUserName = req.params.username;
        const response = await Orders.find({username: tempUserName});
        res.status(200).json(response);
    }
    catch(err) {
        res.status(400).json(err)
    }
})

//API 10
router.get('/orderbyorder/:orderid', async(req, res) => {
    try{
        const tempOrderId = req.params.orderid;
        const response = await Orders.findOne({orderid: tempOrderId});
        res.status(200).json(response);
    }
    catch(err) {
        res.status(400).json(err)
    }
})


module.exports = router;
