var Sequelize = require('sequelize');
var config = require('../config/resolver')

var instance = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
    instance : instance,
    Sequelize : Sequelize
}