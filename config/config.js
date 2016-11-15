module.exports = {
    "development": {
        "username": "ddyrcz",
        "password": '',
        "database": "connections",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": '',
        "database": "connections_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": false
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
