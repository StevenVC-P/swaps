const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swaps");

const productSeed = [
    {
        productName:"Onya Bulk Food Starter Sets",
        category:"Storage",
        review: "The coolest bags ever",
        url:"https://www.onyalife.com/product/reusable-bulk-food-bag-set//"
    },
    {
        productName:"",
        category:"",
        review: "",
        url:""
    }
];

db.ProductModel.remove({})
.then(() => db.ProductModel.collection.insertMany(productSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });