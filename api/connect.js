const mysql = require("mysql");

const db = mysql.createConnection({
  host:"saeedwebdev.ir",
  user:"saeedwe1_social2",
  password:"amiralim890",
  database:"saeedwe1_social2"
})
module.exports = {db}