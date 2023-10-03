
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
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "commentModel"
        }
    ]
   
}, {timestamps: true});




const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;