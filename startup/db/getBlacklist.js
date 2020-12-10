const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();

//this returns the blacklist
module.exports = function() {
    console.log("In getBlacklist");
    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
     
    //pull in the connection string
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Stored procedure    
        return pool.request()
            // .input('contentfulId', sql.Int, 3)
            .execute('GetBlacklist');
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
};