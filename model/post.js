var instance = require('../db').instance;
var Sequelize = require('../db').Sequelize;


var Post = instance.define('post', {
    content: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
})

module.exports = Post;