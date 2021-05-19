
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String, 
        required: true
    },
    category: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
   
}, {timestamps: true});




const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;