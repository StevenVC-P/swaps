const { ProductModel } = require('../models');


module.exports = {

    findAll: function(req, res) {
        ProductModel
            .find(req.query)
            .then(productData => res.json(productData))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        ProductModel
            .findById(req.params.id)
            .then(productData => res.json(productData))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        ProductModel
            .create(req.body)
            .then(productData => res.json(productData))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        ProductModel
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(productData => res.json(productData))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        ProductModel
            .findById({_id: req.params.id})
            .then(productData => productData.remove())
            .then(productData => res.json(productData))
            .catch(err => res.status(422).json(err));
    }



}