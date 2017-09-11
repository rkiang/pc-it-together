var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var newBuild = require('../models/create.js');

router.post('/', function (req, res) {
    console.log('post route data is : ', req.body);
    var newBuild = new newBuild(req.body);
    newBuild.save(function (err, data) {
        if (err) {
            console.log('update error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});


module.exports = router;