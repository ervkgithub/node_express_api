const { json } = require('body-parser');
const { application } = require('express');
const express = require('express');
const Users = require('../models/Users');


const router = express.Router();





router.get('/', (req, res) => {
    res.send('users route active')
})



router.post('/adduser', async(req, res) => {
    console.log('inside user add api')
    try{
        const user = new Users({
            // userid = 'req.body.userid' //auto increment
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password
        })
        const response = await user.save();
        console.log(response);
        res.status(201).json(response);
    }
    catch(err){
        res.status(400),json({message: err.message})
    }
    
})




module.exports = router;