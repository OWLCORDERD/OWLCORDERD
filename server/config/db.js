const mysql = require("mysql");

const db = mysql.createPool({
    host : '13.124.149.189',
    port : 3306,
    user : 'owlcoder',
    password : '3712',
    database : 'owlcoderd'
});

module.exports = db;