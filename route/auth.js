var express = require('express');
var User = require('../model/user')

var router = express.Router();

router.use((req, res, next) => {

    // Set the static logged user for session purpose
    User.findOne({ name: 'Dawid', })
        .then((user) => {
            if (user) {
                req.session = { user: user }
                next();
            } else {
                return User.create({
                    name: 'Dawid',
                    lastname: 'Dyrcz'
                })
            }
        })
        .then((user) => {
            if (user) {
                req.session = { user: user }
                next();
            }
        })
})

module.exports = router;