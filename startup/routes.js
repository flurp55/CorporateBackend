const express = require("express");
// const error = require("../middleware/error");
const addMailUser = require("../db/addMailUser");
const blogGetPopular = require("../db/blogGetPopular");
const blogShareUpdate = require("../db/blogShareUpdate");
const getBlacklist = require("../db/getBlacklist");
const searchBlogs = require("../db/searchBlogs");
const updateBlogInfo = require("../db/updateBlogInfo");

module.exports = function(app) {
    app.use(express.json());
    app.use("/api/addMailUser", addMailUser);
    app.use("/api/blogGetPopular", blogGetPopular);
    app.use("/api/blogShareUpdate", blogShareUpdate);
    app.use("/api/getBlacklist", getBlacklist);
    app.use("/api/searchBlogs", searchBlogs);
    app.use("/api/updateBlogInfo", updateBlogInfo);
    //  not calling this function- just passing a reference to it
    // app.use(error);
}