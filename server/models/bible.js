var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BibleSchema = new Schema({
    title: {type: String, default: ''},
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

module.exports.getBibleLink = function (params, callback) {
    Bible.find({ status: 'A' }, callback);
}

module.exports.editBibleLink = function (params, callback) {
    var update = clean(params)
    Bible.findByIdAndUpdate(params.bible_id, update, { new: true }, callback);
}

module.exports.deleteBibleUrl = function (id, callback) {
    Bible.findByIdAndUpdate(id, { status: 'D' }, { new: true }, callback);
}

function clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }
