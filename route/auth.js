var express = require('express');
var User = require('../model/user')

var router = express.Router();

router.use((req, res, next) => {

    User.findOrCreate({
        where: {
            login: 'Admin'
        }, defaults: {
            name: 'Admin',
            lastName: 'Admin',
            password: 'Admin'
        }
    }).spread((user, created) => {
        req.user = {
            login: user.login,
            userId: user.id
        };

        next();
    })
})

module.exports = router;