var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name : String,
    lastName : String,
    login : String,
    password : String
})

module.exports = mongoose.model('User', User);