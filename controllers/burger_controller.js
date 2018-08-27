var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/',function(req, res){
    burger.getAll(function(data){
        var hbarsObj = {
            burger: data
        };
        // console.log(hbarsObj);
        res.render('index', hbarsObj);
    })
});

router.post('/api/burgers', function(req, res){
    // console.log('req.body being logged in controller line 16:')
    // console.log(req.body.burger_name)
    burger.insertOne(req.body.burger_name, function(result){
        res.json({ id: result.insertId });
    });
})

router.put('/api/burgers/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    burger.updateOne(condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;