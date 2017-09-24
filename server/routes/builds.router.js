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

router.get('/others', function (req, res) {
    console.log('builds.router get was hit');
    InfoSchema.find(req.body, function (err, data) {
        if (err) {
            console.log('find err', err);
            res.sendStatus(500);
        } else {
            console.log('found data', data)

            res.send(data)
        }
    })
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


router.put('/details/:id', function(req, res){
    console.log('Update data is: ', req.body);
    console.log('Update id is: ', req.params);
    InfoSchema.findById(req.params.id, function(err, data){
      if(err) {
        throw err;
      } else {
        //if item is was changed, update it. If not, keep it the same
        data.name = req.body.name || data.name;
        data.cpu = req.body.cpu || data.cpu;
        data.mobo = req.body.mobo || data.mobo;
        data.fan = req.body.fan || data.fan;
        data.ram = req.body.ram|| data.ram;
        data.psu = req.body.psu || data.psu;
        data.gpu = req.body.gpu || data.gpu;
        data.sound = req.body.sound || data.sound;
        data.case = req.body.case || data.case;
        data.storage = req.body.storage || data.storage;
        data.sharing = req.body.sharing;
        data.img = req.body.img || data.img;
        data.save(function (err) {
          if(err) {
            console.error('ERROR!');
            res.sendStatus(500);
          }else {
            res.sendStatus(200);
          }
        });
      }
    }); // end findOne
  }); // end of PUT Router
module.exports = router;