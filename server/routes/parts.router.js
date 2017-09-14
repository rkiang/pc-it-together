var express = require('express');
var router = express.Router();
var Parts = require('../models/parts.js');

router.get('/', function(req, res) {
    console.log('get parts router was hit');
    
})

module.exports = router;