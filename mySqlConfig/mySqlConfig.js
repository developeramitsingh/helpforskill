const {createPool} = require("mysql");
const util = require("util");
require('dotenv').config();

const pool = createPool({
	connectionLimit:10,
	user: process.env.DB_USER,
	password:process.env.DB_PASSWORD,
	database:process.env.MYSQL_DB,
	//socketPath:`/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
	host:process.env.host,
	port:process.env.Db_port
})

module.exports = pool;

