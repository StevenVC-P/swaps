const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swaps");

const productSeed = [
    {
        productName:"Leaf Razors",
        category:"Bathroom",
        review: "I am so happy I made this investment. I bought this more than a 1 year ago and although it did break (a spring or something broke inside it) and I contacted customer service and they send me a new one, no questions asked. It was such a relief. I don’t think I’ll ever have to buy blades but if I do, I know they are SO much cheaper than the ones I uRead more about I am so happy I made this investment.sed to buy. All and all, even if something did happen to this and they didn’t replace it, I would end up still buying a new one. It’s that good.",
        url:"https://leafshave.com/",
        comments: []
    },
    {
        productName:"Pela Compostable Phone Case ",
        category:"Personal",
        review: "I've had this on my phone for a year and a half. It has been great. I drop my phone a lot and I've had no cracks or breaks. It is just awesome.",
        url:"https://pelacase.com/",
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