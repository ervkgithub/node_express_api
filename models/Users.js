const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    userid: {
        type: Number,
        required: false,
        unique: true,
        index: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Users', UsersSchema);