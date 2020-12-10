const Product = require('../api/product');
const Basic = require('../api/basic');

module.exports = {

    basic() {
        return new Basic();
    },



    product(){
        return new Product()
    }
}