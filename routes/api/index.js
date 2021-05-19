const router = require("express").Router();
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");

// Book routes
router.use("/user", userRoutes);
router.use("/product", productRoutes)

module.exports = router;
