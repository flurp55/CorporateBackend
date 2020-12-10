var request = require('request');
module.exports = class ByDesignCurl {


    async curl(api = '', method = 'GET', data = null) {
        let     api_user_name = 'website-api-user',
        api_user_password = 'zPGpy%23NNRK';

        if (data !== null)
            return false;
        var options = {
            uri: 'https://webapi.bydesign.com/NewULife/api/' + api,
            auth: {
                user: api_user_name,
                password: api_user_password,
            },
            headers: {
                contentType: 'application/json',
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            json: true,
            href: '',
            pathname: '/'
        }
        return new Promise((resolve, reject) => {
            let     api_user_name = 'website-api-user',
                api_user_password = 'zPGpy%23NNRK';
            request(options.uri, options, (err, res, body) => {
                console.log('ByDesign response ' + api + ' : ', body);
                if (err) reject(err)


                resolve({
                    api: {
                        call: api,
                        user: api_user_name,
                        password: api_user_password.substring(0,4)+"*********"
                    },
                    body: body
                })

            });
        });
    }
}