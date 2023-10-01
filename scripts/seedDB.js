const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swaps", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

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
    },
    {
        productName:"David's Toothpaste ",
        category:"Bathroom",
        review: "David's peppermint is my all time favorite toothpaste....it has clean ingredients and does a spectacular job of cleaning and whitening my teeth. I can't use any other toothpaste now.",
        url:"https://pelacase.com/",
        comments: []
    },
    {
        productName:"Eco Nuts Laundtry Nuts ",
        category:"Laundry",
        review: "These soap nuts are awesome! I really wanted to get away from plastic detergent bottles, so I decided to try these. They are very effective! I actually washed something that had cat pee on it and it came totally clean. My only real problem is finding the pouch of soap nuts when the laundry is done. LOL. Nonetheless, I don't consider that a big enough negative to really worry about. They are awesome and I'm so happy to not have to use or recycle plastic laundry soap bottles anymore! I like that these come in a tiny cardboard box with no plastic packaging of any kind.",
        url:"https://econutssoap.com/collections/eco-nuts-organic-soap-berries",
        comments: []
    },
    {
        productName:"Who Gives a Crap Toilet Paper ",
        category:"Bathroom",
        review: "Love this company and toilet paper. So easy to self manage our orders and the timing. During Covid when everyone was running out and freaking out about toilet paper, we didn’t need to, because they prioritised their customers and assured us we would still get our order, which we did. It’s great to know that we are getting a great product for the environment and helping build toilets, and even though it’s a little more expensive, they seem to last a lot longer so I think it works out well for everyone. Will keep using these guys forever! ",
        comments: []
    },
    {
        productName:"Refillable Coffee Pods from Keurig ",
        category:"Kitchen",
        review: "I'm not sure how I'd survive without this thing. My wife and I enjoy drinking different types of coffee and this allows us us to have fresh beans on hand and use fresh coffee whenever we'd like. We also appreciate the beneficial impact on the environment vs k cups",
        url:"https://www.keurig.com/?utm_source=google&utm_medium=cpc-ecomm&utm_campaign=SEM_Intent_Brand_Bev_Owned_K-Cups_Exact_New-Users+373024062435&utm_term=keurig%20reusable%20pod&utm_content=Brand_Bev_Owned_K-Cups_Exact_Recyclable&gclid=CjwKCAjwtJ2FBhAuEiwAIKu19hbc_GuepRnCUDve__7XNnX6-_3dAz_iLYF09AMjxdMXYB2IYqEYvhoC4kAQAvD_BwE",
        comments: []
    },
    {
        productName:"BlueLand Cleaning Supplies ",
        category:"Cleaning Supplies",
        review: "So happy with my Clean Suite! All the products do exactly what they are supposed to do and smell nice. I am so glad this product is available for my domestic home and my big home, the Earth! Thank you!",
        url:"https://www.blueland.com/",
        comments: []
    },
    {
        productName:"Refillable and Biodegradable Dental Floss from HumanKind",
        category:"Bathroom",
        review: "Great Product",
        url:"https://byhumankind.com/products/floss?gclid=CjwKCAjwtJ2FBhAuEiwAIKu19shGHpJA6AKMBiBQqU4WLwjlxq_k_Kh6FhkyVWVkmNnif5wH8Td0KBoCVHAQAvD_BwE",
        comments: []
    },
    {
        productName:"Onya Bulk Food Starter Sets",
        category:"Kitchen",
        review: "The coolest bags ever",
        url:"https://www.onyalife.com/product/reusable-bulk-food-bag-set//",
        comments: []
    },
    {
        productName:"Garnier Whole Blends Shampoo",
        category:"Bathroom",
        review: "I love this shampoo! I received a sample of the Garnier Whole Blends Gentle Shampoo and Conditioner in Oat Delicacy in the mail not too long ago After just one use, I was hooked! The smell is divine and the lather is so luscious and soft! It left my hair feeling clean and fresh and not overly stripped out! This shampoo is super gentle and great for sensitive scalps! It has worked wonders on taming my itchiness since it doesn't have any harsh chemicals or detergents! I can't get over how amazing it smells! OMG! I wish this scent came in a perfume and air freshener so I could make EVERYTHING smell like this stuff!",
        url:"https://www.amazon.com/dp/B01AUJ1RC0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.31291481[src|[ch|[lt|",
    }
];

db.ProductModel.deleteMany({})
  .then(() => db.ProductModel.collection.insertMany(productSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });