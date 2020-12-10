const client = require('./client');

module.exports = class ByDesignController {

    config_routes(app) {
        app.get('/bydesign/get', this.get_rep_info);
    }

    async get_rep_info(req, res) {
        let rep_id = (typeof req.query.rep_id != 'undefined') ? req.query.rep_id : '';
        (client.basic().get_rep_info(rep_id)).then(function (d) {
            res.set('Content-Type', 'application/json');
            res.json((typeof d != 'undefined') ? d : {});
        })
    }
}