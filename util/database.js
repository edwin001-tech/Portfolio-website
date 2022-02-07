const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'contactme',
    password: 'password'
});

module.exports = pool.promise(); //promise to handle asynchronous tasks

