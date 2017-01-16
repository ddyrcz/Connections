var express = require('express');
var router = express.Router();
var User = require('../model/user')
var Post = require('../model/post')

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
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
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.patch('/follow/:userId', (req, res) => {
    User.findByIdAndUpdate(req.session.user._id,
        { $push: { following: req.params.userId } },
        {new : true},
        (err, user) => {
            if(err) res.status(500).json(err);
            res.json(user);
        })
})

router.post('/', (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

module.exports = router;
