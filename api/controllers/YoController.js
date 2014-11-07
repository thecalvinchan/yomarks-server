/**
 * YoController
 *
 * @description :: Server-side logic for managing yoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index : function(req,res) {
        var username = req.param('username'),
            link = req.param('link');
        Yo.send(username, link, function(data) {
            res.send(data);
        });
    }
};

