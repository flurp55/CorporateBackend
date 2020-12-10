const newulife_mysql = require('../../db/mysql');
const ByDesignCurl = require('./curl');

module.exports = class ByDesign extends ByDesignCurl{

    constructor() {
        super();
        this.connection = new newulife_mysql();
    }

    get_rep_info(rep_id) {
        return this.curl('user/rep/' + rep_id + '/info');
    }
}