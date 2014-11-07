var http = require('http'),
    querystring = require('querystring');

module.exports = {
    send: function(username, link, callback){
        var postData = querystring.stringify({
            api_token: process.env.YO_API_TOKEN,
            username: username,
            link: link,
        });
        var options = {
            hostname: 'api.justyo.co',
            port: 80,
            path: '/yo',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length 
            }
        }
        var postReq = http.request(options, function(res) {
            var data = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function() {
                console.log(data);
                callback(data);
            });
        });

        // post the data
        postReq.write(postData);
        postReq.end();
    }
}
