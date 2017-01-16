var express = require('express');
var User = require('../model/user')

var router = express.Router();

router.use((req, res, next) => {

    // Set the static logged user for session purpose
    User.findOne({ _id: '587c84bbd84edb14d01b6fa4' })
        .then((user) => {            
            req.session = { user: user }
            next();
        })
})

module.exports = router;