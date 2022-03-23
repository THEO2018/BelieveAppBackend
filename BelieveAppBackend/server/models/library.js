var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var librarySchema = new Schema({
  image_name: String,
  media_type: String,
  section: String,
  path: String,
  thumbnail: String,
  title: String,
  status: String
},
  {
    timestamps: true
  });

var Library = mongoose.model('Library', librarySchema);
module.exports = Library;


/////////////////////////// ADMIN PANEL /////////////////////////

module.exports.addNewLibrary = function (params, callback) {
  var new_library = new Library(params);
  new_library.save(callback);
}

module.exports.getLibraryImages = function (callback) {
  Library.find({ media_type: 'I', status: 'A' }, callback);
}
module.exports.getLibraryVideos = function (callback) {
  Library.find({ media_type: 'V', status: 'A' }, callback);
}
module.exports.getLibraryAudio = function (callback) {
  Library.find({ media_type: 'A', status: 'A' }, callback);
}

module.exports.deleteLibrary = function (id, callback) {
  Library.findByIdAndUpdate(id, { status: 'D' }, { new: true }, callback);
}
