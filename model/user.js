var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    lastname: String,
    login: String,
    password: String,
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', User);