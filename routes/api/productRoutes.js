const router = require('express').Router();
const productController = require('../../controllers/productController');
const { ProductModel } = require("../../models");

// URL PATH /api/product/

// Create New User, Set Session loggedIn: true
router.route('/')
    .get(productController.findAll)
    .post(productController.create)

router.route('/:id')
    .get(productController.findById)
    .put(productController.update)
    .delete(productController.remove);

router.route('/comment')
    .post(productController.addComment)
    .get(productController.findAllWithComments)

module.exports = router;