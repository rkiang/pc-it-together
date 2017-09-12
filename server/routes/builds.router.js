var express = require('express');
var router = express.Router();
var InfoSchema = require('../models/create');

router.get('/', function (req, res) {
    console.log('shelf get route was hit');
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        InfoSchema.find(userInfo, function (err, data) {
            if (err) {
                console.log('find err', err);
                res.sendStatus(500);
            } else {
                console.log('found data', data)

                res.send(data)
            }
        })
    } else {
        res.send(false);
    }
})

module.exports = router;