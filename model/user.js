var Sequelize = require('sequelize');
var config = require('../config/resolver')

var sequelize = new Sequelize(config.database, config.username, config.password, config);

var Post = require('./post');

var User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    login: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    }
});

User.belongsToMany(User, { as: 'frineds', through: 'user_friends' })
User.hasMany(Post)
sequelize.sync()

module.exports = User;