var express = require('express');
var router = express.Router();
var InfoSchema = require('../models/create');

router.get('/', function (req, res) {
    console.log('shelf get route was hit');
    InfoSchema.find({}, function (err, data) {
        if (err) {
            console.log('find err', err);
            res.sendStatus(500);
        } else {
            console.log('found data', data)
            res.send(data)
        }
    })
})

module.exports = router;