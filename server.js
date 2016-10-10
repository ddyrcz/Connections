var sql = require('mssql');

var config = {
    // user: '',
    // password: '',
    server: 'localhost\\SQLEXPRESS', 
    database: 'Facebook',    
    stream: true
}


sql.connect(config, (err) => {

    if(err) throw err;

    console.log('connected to sql!');
    var request = new sql.Request();     

    request.query('select * from users');

    request.on('row', (data) =>{        
        console.log(data);
    });

    request.on('error', (err) => {
        throw err;
    });

    request.on('done', (affected) => {

    });    

});

sql.on('error', (err) => {
    throw err;
});