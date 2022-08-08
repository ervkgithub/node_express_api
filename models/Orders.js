const mongoose = require('mongoose');

const OrdersSchema = mongoose.Schema({
    orderid: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    orderdate: {
        type: String,
        required: true
    },
    deliverydate: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    paymentmode: {
        type: String
    },
    paymentstatus: {
        type: Boolean,
        default: false
    },
    orderstatus: {
        type: String,
        required: true,
        default: 'Under Review'
    }
})


module.exports = mongoose.model('Orders', OrdersSchema);
