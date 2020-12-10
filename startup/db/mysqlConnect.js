const winston = require('winston');
const mysql = require("mysql");

module.exports = function() {
    //need to get the info from ByDesign for the login info
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
    });
 
    connection.connect()
    .then(() => winston.info("Connected to MYSQL..."));
    
    
    //perform whatever we need to do them close the connection
    
    connection.end();