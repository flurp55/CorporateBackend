const winston = require('winston');
const sql = require("mssql");
// const config = require("./config");

module.exports = function() {
    // const config = "Server=newudb.database.windows.net;Database=NewUDevDb;User Id=newUAdminDb;Password=G0tr0actDb102!;Encrypt=true";

    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    })

    console.log("In sqlConnect", config.toString());
     
    sql.connect(config).then(pool => {
        
        // Stored procedure    
        console.log("In the Pool");
        return pool.request()
            .input('name', sql.Char(80), "Test2")
            .input('email', sql.Char(120), "test@test.com")
            .input('locale', sql.Char(8), "en-US")
            .input('region', sql.Char(50), "North America")
            // .output('output_parameter', sql.VarChar(50))
            .execute('AddNewUser')
    }).then(result => {
        console.dir(result)
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect");
    })
}