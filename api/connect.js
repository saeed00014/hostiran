const mysql = require("mysql");

const db = mysql.createConnection({
  host:"saeedwebdev.ir/",
  user:"saeedwe1_root",
  password:"amiralim890",
  database:"saeedwe1_social"
})
console.log(db)
module.exports = {db}