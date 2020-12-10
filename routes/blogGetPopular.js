const winston = require('winston');
const sql = require("mssql");
const config = require("./config");
require('dotenv').config();
const router = express.Router();

//this returns the 3 most popular contentfulIds
module.exports = function() {
    console.log("In blogGetPopular");
    sql.on('error', err => {
        // ... error handler
        console.log("Top Error sqlConnect");
    });
    router.get("/", async (req, res) => {
        //pull in the connection string
    sql.connect(process.env.DBCONN).then(pool => {
        
        // Stored procedure    
        return pool.request()
            // .input('contentfulId', sql.Int, 3)
            .execute('GetMostPopular');
    }).then(result => {
        console.dir(result);
        res.send(result);
    }).catch(err => {
        // ... error checks
        console.log("HAD AN ERROR IN sqlConnect" + err);
    });
    });  
};