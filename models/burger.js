//Requiring the orm object so we can utilize the methods of it.
var orm = require('../config/orm.js');

//Methods that utilize the orm to query the DB
var burger = {
    //Console logs all items in the burgers table
    getAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        })
    },
    insertOne: function(testVal, cb){
        orm.insertOne(testVal, function(res){
            cb(res);
        })
    },
    updateOne: function(updateVal, oldVal, cb){
        orm.updateOne(updateVal, oldVal, function(res){
            cb(res);
        })
    },
    testQuery: function(){
        orm.testQuery();
    }
};

// burger.testQuery();

module.exports = burger;