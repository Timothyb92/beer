var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/',function(req, res){
    burger.getAll(function(data){
        var hbarsObj = {
            burger: data
        };
        console.log(hbarsObj);
    })
})


module.exports = router;