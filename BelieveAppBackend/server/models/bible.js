var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BibleSchema = new Schema({
    bible_url: String,
    status:{type: String, default: 'A' },

},
    {
        timestamps: true
    });

var Bible = mongoose.model('Bible', BibleSchema);
module.exports = Bible;


/////////////////////////// ADMIN PANEL /////////////////////////

module.exports.addBibleLink = function (params, callback) {
    var bibleLink = new Bible(params);
    bibleLink.save(callback);
}

module.exports.getBibleLink = function (callback) {
    Bible.findOne({ status: 'A' }, callback);
}

module.exports.editBibleLink = function (params, callback) {
    Bible.findOneAndUpdate({}, { bible_url: params.bible_url }, { new: true }, callback);
}

module.exports.deleteBibleUrl = function (id, callback) {
    Bible.findByIdAndUpdate(id, { status: 'D' }, { new: true }, callback);
}
