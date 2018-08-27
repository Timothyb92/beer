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
});

router.post('/api/burgers', function(req, res){
    burger.insertOne('burger_name', req.body.name, function(result){
        res.json({ id: result.insertId });
    });
})

router.put('api/burgers/:id', function(req, res){
    var condition = 'id = ' + req.params.burger;
    burger.updateOne({
        burger_name: req.body.burger_name
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;