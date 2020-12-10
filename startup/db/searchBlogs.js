const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();

module.exports = function(searchTerm) {

    //accepts a searchTerm as an argument
    //returns a list of all blogs contentfulIds that contain that term
    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
    //load in the connection string
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Load the Stored procedure    
        return pool.request()
            .input('searchSubject', sql.Char(128), "SomaDerm") //searchTerm
            .execute('SearchBlogs');
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
};