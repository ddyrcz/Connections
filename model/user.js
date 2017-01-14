var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    lastname: String,
    login: String,
    password: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', User);