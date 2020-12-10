const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();

module.exports = function(name, email, locale, region) {

    //accepts name, email, locale, and region arguements
    //and adds them to the MailingList table
    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
    
    //load in the connection string
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Stored procedure    
        return pool.request()
            .input('name', sql.Char(80), name)
            .input('email', sql.Char(120), email)
            .input('locale', sql.Char(8), locale)
            .input('region', sql.Char(50), region)
            // .output('output_parameter', sql.VarChar(50))
            .execute('AddNewUser');
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
};