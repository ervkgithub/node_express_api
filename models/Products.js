const mongoose = require('mongoose');
// ORM - Object Relational Model



const ProductsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    productid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    category: {
        type: String
    }
})

module.exports = mongoose.model('Products', ProductsSchema);