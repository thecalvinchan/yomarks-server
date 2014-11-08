/**
 * ClipController
 *
 * @description :: Server-side logic for managing clips
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index : function(req,res) {
        var clip = req.param('m');
        clip = encodeURI(clip);
        res.view('clip/index', {
            clip: clip
        });
    }
};

