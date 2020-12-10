const sql = require("mssql");

const blogsModel = new Schema(
    {
        contentfulId: {type:String},
        title: {type:String}
    } 
);

moddule.exports = blogsModel;