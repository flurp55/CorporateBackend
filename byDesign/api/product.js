
const ByDesignCurl = require('./curl')

module.exports = class Product extends ByDesignCurl{



    async get_product_information(product_id) {
        let rep_id = (typeof req.query.rep_id != 'undefined') ? req.query.rep_id : '';

    }
}