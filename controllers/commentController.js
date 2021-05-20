const { CommentModel } = require('../models');

module.exports = {
    findAll: function(req, res) {
        CommentModel
        .find(req.query)
        .then(commentData => res.json(commentData))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        CommentModel
            .findById(req.params.id)
            .then(commentData => res.json(commentData))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        CommentModel
            .create(req.body)
            .then(commentData => res.json(commentData))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        CommentModel
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(commentData => res.json(commentData))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        CommentModel
            .findById({_id: req.params.id})
            .then(commentData => commentData.remove())
            .then(commentData => res.json(commentData))
            .catch(err => res.status(422).json(err));
    }

}