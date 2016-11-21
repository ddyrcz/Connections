var Sequelize = require('sequelize');
var config = require('../config/resolver')

var sequelize = new Sequelize(config.database, config.username, config.password, config);

var Post = sequelize.define('post', {
    content: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
})

sequelize.sync();

module.exports = Post;