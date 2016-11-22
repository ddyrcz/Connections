var express = require('express');

var router = express.router();

router.use((req, res, next) => {
    req.user = {
        login: 'Admin',
        userId: 1,
        isAdmin: true
    };

    next();
})

module.exports = router;