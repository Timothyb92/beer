//Setting up connection to db
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db',
    port: 8889
})

//Making the connection to db
connection.connect(function(err){
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId);
})


//Exporting connection to db for use in other files
module.exports = connection;