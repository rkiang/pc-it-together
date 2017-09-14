var express = require('express');
var router = express.Router();
var InfoSchema = require('../models/create');

router.get('/', function (req, res) {
    console.log('builds.router get was hit');
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

router.delete('/:id', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('req.params.id', req.params.id);
        InfoSchema.findById(req.params.id, function (err, data) {
            if (err) {
                console.log('delete find error:', err);
                res.sendStatus(500);
            } else {
                console.log('data', data);
            }
            if (req.user.username === data.username) {
                InfoSchema.findByIdAndRemove({ _id: req.params.id }, function (err) {
                    if (err) {
                        console.log('Delete err', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200)
                    }
                })
            }
        })
    }
})

router.get('/details/:id', function (req, res) {
    var id = req.params.id;
    console.log('get builds.router: details was hit');
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        InfoSchema.findById(id, function (err, data) {
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

router.put('/details', function (req, res){
    var id = req.body._id;
    var pc = {
        name: req.body.name,
        cpu: req.body.cpu,
        mobo: req.body.mobo,
        fan: req.body.fan,
        ram: req.body.ram,
        psu: req.body.psu,
        gpu: req.body.gpu,
        sound: req.body.sound,
        case: req.body.case,
        storage: req.body.storage
    }
    console.log('router put was hit!');
    InfoSchema.findByIdAndUpdate(
        {_id: id},
        { $set: { pc}},
        function (err, data) {
            if(err) {
                console.log('update error is: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    )
    
})
module.exports = router;