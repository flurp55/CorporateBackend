// const config = require("config");
const winston = require('winston');
const { Console } = require('winston/lib/winston/transports');

module.exports = function() {
    console.log("In config top");
    // const config = {
    //     user: 'newUAdminDb',
    //     password: 'G0tr0actDb102!',
    //     server: 'newudb.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    //     database: 'NewUDevDb',
    // };

    // const config = {
    //     user: 'newUAdminDb',
    //     password: 'G0tr0actDb102!',
    //     server: 'newudb.database.windows.net',
    //     database: 'NewUDevDb',
    //     pool: {
    //         max: 10,
    //         min: 0,
    //         idleTimeoutMillis: 30001
    //     }
    // }

    const config = "Server=newudb.database.windows.net;Database=NewUDevDb;User Id=newUAdminDb;Password=G0tr0actDb102!;Encrypt=true";
}; 