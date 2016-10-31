var express = require('express');
var usersDal = require('../data-access/users-dal');
var router = express.Router();
var User = require('../models').User;
var Post = require('../models').Post;

/* GET users listing. */
router.get('/:id', (req, res, next) => {
  var idUser = req.params.id;
  res.json(usersDal.find(idUser));
});

router.get('/', (req, res, next) => {
  // res.json(usersDal.findAll());

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
