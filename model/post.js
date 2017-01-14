var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  content: String,
  publisher:
  {
    name: String,
    lastname: String,
    _id: { type: Schema.Types.ObjectId, ref: 'User' }
  }
});

module.exports = mongoose.model('Post', Post);

