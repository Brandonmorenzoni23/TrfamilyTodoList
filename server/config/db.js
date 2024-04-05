const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Realdreamscometrue1!",
  host: "localhost",
  port: 5432,
  database: "Master"
});

module.exports = pool;