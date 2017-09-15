var express = require('express');
var router = express.Router();
var Parts = require('../models/parts');

router.get('/', function (req, res) {
    console.log('get parts router was hit');
    Parts.find(function (err, data) {
        if (err) {
            console.log('find err', err);
            res.sendStatus(500);
        } else {
            console.log('found data', data)

            res.send(data)
        };
    });
});

module.exports = router;