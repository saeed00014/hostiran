const mysql = require("mysql");

const db = mysql.createConnection({
  host:"https://saeedwebdev.ir/",
  user:"saeedwe1_root",
  password:"amiralim890",
  database:"saeedwe1_social"
})

module.exports = {db}