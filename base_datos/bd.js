const mysql = require('mysql2')
try{
    const con = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'abel',
            database: 'libros'
        }).promise()
    
        module.exports = con
}catch(e){
    console.log(e);
}