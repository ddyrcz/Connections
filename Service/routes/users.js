var express = require('express');
var usersDal = require('../data-access/users-dal');
var router = express.Router();
var User = require('../models').User;
var Post = require('../models').Post;

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, {
    include: Post
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.get('/', (req, res, next) => {
  User.findAll({
    include: Post
  })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

module.exports = router;
