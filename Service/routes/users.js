var express = require('express');
var usersDal = require('../data-access/users-dal');
var router = express.Router();

/* GET users listing. */
router.get('/:id', (req, res, next) => {
  var idUser = req.params.id;
  res.json(usersDal.find(idUser));
});

router.get('/', (req, res, next) => {
  res.json(usersDal.findAll());
});

module.exports = router;
