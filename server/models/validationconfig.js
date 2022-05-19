var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validationConfigSchema = new Schema({
  validation_status: {type: Boolean, default: true}
});

var ValidationConfig = mongoose.model('ValidationConfig', validationConfigSchema);
module.exports = ValidationConfig;

module.exports.getValidationConfig = function (callback) {
  ValidationConfig.findOne({}, 'validation_status', callback);

}

////////////////////////---------- ADMIN PANEL -------------////////////////////////////////
module.exports.getStatus = function (callback) {
  ValidationConfig.findOne({}, 'validation_status', callback);
}



module.exports.changeAlbumStatus = function (params, callback) {
  ValidationConfig.findOneAndUpdate({}, { validation_status: params.status }, callback);
}


