var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var NewBuild = require('../models/create.js');

router.post('/', function (req, res) {
    console.log('post route data is : ', req.body);
    if (req.isAuthenticated()) {
        var saveBuild = new NewBuild(req.body)
        saveBuild.username = req.user.username;
        console.log('saveBuild.username is:', saveBuild.username);
        saveBuild.save(function (err, data) {
            if (err) {
                console.log('update error: ', err);
                res.sendStatus(500);

            } else {
                // failure best handled on the server. do redirect here.
                console.log('not logged in');
                // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
                res.send(false);
            }
        })
    }
});

        module.exports = router;