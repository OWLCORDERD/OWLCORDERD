const mysql = require("mysql");
let options = require("./option");

let loginData = {
  host: options.storageConfig.host,
  user: options.storageConfig.user,
  password: options.storageConfig.password,
  port: options.storageConfig.port,
};

const db = mysql.createPool({
  host: loginData.host,
  port: loginData.port,
  user: loginData.user,
  password: loginData.password,
  database: "owlcoderd",
});

module.exports = db;
