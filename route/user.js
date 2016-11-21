var express = require('express');
var router = express.Router();
var User = require('../model/user')
var Post = require('../model/post')

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, {
        include: Post
    })
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.get('/', (req, res, next) => {
    User.findAll()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.json(user);
        });
});

module.exports = router;
