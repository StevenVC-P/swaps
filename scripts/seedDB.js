const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swaps");

const productSeed = [
    {
        productName:"Onya Bulk Food Starter Sets",
        category:"Storage",
        review: "The coolest bags ever",
        url:"https://www.onyalife.com/product/reusable-bulk-food-bag-set//",
        comments: []
    },
    {
        productName:"Garnier Whole Blends Shampoo",
        category:"Hygiene",
        review: "I love this shampoo! I received a sample of the Garnier Whole Blends Gentle Shampoo and Conditioner in Oat Delicacy in the mail not too long ago After just one use, I was hooked! The smell is divine and the lather is so luscious and soft! It left my hair feeling clean and fresh and not overly stripped out! This shampoo is super gentle and great for sensitive scalps! It has worked wonders on taming my itchiness since it doesn't have any harsh chemicals or detergents! I can't get over how amazing it smells! OMG! I wish this scent came in a perfume and air freshener so I could make EVERYTHING smell like this stuff!",
        url:"https://www.amazon.com/dp/B01AUJ1RC0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.31291481[src|[ch|[lt|",
        comments: []
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