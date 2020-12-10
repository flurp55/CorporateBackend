const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();

module.exports = function(contentfulId) {

    //accepts a contentfulId as an argument
    //increments the numVisits column by 1 and sets lastVistited date to today
    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
    
    //load in the connection string
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Stored procedure    
        // console.log("In the Pool");
        return pool.request()
            .input('contentfulId', sql.Char(50), contentfulId)
            .execute('UpdateBlogInfo');
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
};