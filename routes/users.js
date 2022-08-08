const { json } = require('body-parser');
const { application, response } = require('express');
const express = require('express');
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const router = express.Router();





router.get('/', async (req, res) => {
    try{
        console.log('to fetch the list of all users');
        const response = await Users.find();
        console.log(response);
        res.status(200).json(response);
    }
    catch(err){
        res.status(400).json(err);
    }
})


router.post('/login', async (req, res) => {
    try {

        console.log('api for login');
        const tempUsername = req.body.username;
        const tempPassword = req.body.password;
        // const response = await Users.find({username: tempUsername, password: tempPassword});
        const response = await Users.find({username: tempUsername});
        console.log(response);
        if(response.length == 0) {
            console.log('---------user not found');
            res.status(422).json({message: 'User Not Found'})
        }
        else if(response.length === 1) {
            //allow login
            //session//jwt - rest
            // let obj = Object.assign(response[0]);
            console.log('---------one user found');

            if((bcrypt.compareSync(tempPassword, response[0].password)) || (tempPassword === response[0].password)) {
                console.log('---------password matched.');
                let obj = {};
                obj.token = jwt.sign({username: 'deepak123'}, "altudo", {
                    expiresIn: 600
                });
                obj = {...obj, ...response[0]._doc};
                res.status(200).json(obj);
            }
            else {
                console.log('---------password not matched.');
                res.status(400).json({message: 'Incorrect Password'})
            }
        }
        else{
            console.log('---------multiple user found');
            res.status(400).json({message: 'Duplicate User'})
        }
    }
    catch(err){
        res.status(400).json(err);
    }
})



router.post('/adduser', async(req, res) => {
    console.log('inside user add api')
    try{
        var salt = bcrypt.genSaltSync(10);
        const encodedPwd = await bcrypt.hash(req.body.password, salt);
        // console.log('-----------reg---------------');
        // console.log(salt);
        // console.log(encodedPwd);
        // console.log('-----------reg end---------------');
        const user = new Users({
            userid: parseInt(Math.random()*100000000),
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: encodedPwd
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