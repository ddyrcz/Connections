var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  content: String
});

module.exports = mongoose.model('Post', Post);

