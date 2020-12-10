const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();

module.exports = function() {

    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
     
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Stored procedure    
        console.log("In the Pool");
        return pool.request()
            .input('name', sql.Char(80), "Test7")
            .input('email', sql.Char(120), "test@test1.com")
            .input('locale', sql.Char(8), "en-US")
            .input('region', sql.Char(50), "North America")
            // .output('output_parameter', sql.VarChar(50))
            .execute('AddNewUser');
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
};