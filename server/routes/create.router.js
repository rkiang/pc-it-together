var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var NewBuild = require('../models/create.js');

router.post('/', function (req, res) {
    console.log('post route data is : ', req.body);
    if (req.isAuthenticated()) {
        var buildObject = req.body;
        buildObject.cpu = JSON.parse(buildObject.cpu);
        buildObject.mobo = JSON.parse(buildObject.mobo);
        buildObject.ram = JSON.parse(buildObject.ram);
        buildObject.case = JSON.parse(buildObject.case);
        buildObject.fan = JSON.parse(buildObject.fan);
        var saveBuild = new NewBuild(buildObject)
        saveBuild.username = req.user.username;
        console.log('saveBuild.username is:', saveBuild.username);
        saveBuild.save(function (err, data) {
            if (err) {
                console.log('update error: ', err);
                res.sendStatus(500);

            } else {
                console.log('not logged in');
                res.send(false);
            }
        })
    }
});

module.exports = router;