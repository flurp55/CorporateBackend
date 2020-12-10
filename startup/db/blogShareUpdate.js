const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();

module.exports = function(contentfulId) {

    //accepts a contentfulId as an argument
    //increments the numShares column by 1 and sets dateLasstShared date to today
    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
    //load in the connection string
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Load the Stored procedure    
        return pool.request()
            .input('contentfulId', sql.Char(50), contentfulId)
            .execute('UpdateBlogShares');
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
};