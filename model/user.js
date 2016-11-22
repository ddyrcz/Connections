var instance = require('../db').instance;
var Sequelize = require('../db').Sequelize;

var Post = require('./post');

var User = instance.define('user', {
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

User.belongsToMany(User, { as: 'followers', through: 'user_followers' })
User.hasMany(Post)

module.exports = User;