//Importing connection to db
var connection = require('./connections.js');


//creating the ORM and the methods to export
var orm = {
    selectAll: function(cb){
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function(insertVal, cb){
        var queryString = 'INSERT INTO burgers (burger_name) ';
        queryString += 'VALUES (' + insertVal + ')';
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function(updateVal, oldVal, cb){
        var queryString = 'UPDATE burgers SET burger_name=';
        queryString += updateval + ' WHERE burger_name=' +  oldVal;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;