var express = require('express');
var router = express.Router();
var Post = require('../model/post')
var User = require('../model/user')

router.get('/:id', (req, res, next) => {
    Post.findById(req.params.id, (err, post) => {
        if(err) res.status(500).json(err);
        res.json(post);
    })
});

router.get('/', (req, res, next) => {
    Post.findAll()
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Post.create(req.body)
        .then(function(post) {
            res.status(200).json(post);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
})

module.exports = router;
