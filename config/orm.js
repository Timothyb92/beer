//Importing connection to db
var connection = require('./connections.js');


//creating the ORM and the methods to export
var orm = {
    selectAll: function(tableInput, cb){
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(insertVal, cb){
        var queryString = 'INSERT INTO burgers (burger_name) ';
        queryString += 'VALUES (' + insertVal + ')';
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(condition, cb){
        var queryString = 'UPDATE burgers SET devoured=true';
        queryString += updateval + ' WHERE ' + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    testQuery: function(){
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
};

module.exports = orm;