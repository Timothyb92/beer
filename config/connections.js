//Setting up connection to db
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db',
    })
}


//Making the connection to db
connection.connect(function(err){
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId);
});


//Exporting connection to db for use in other files
module.exports = connection;