const { db } = require("./config/index")
const { Pool } = require('pg')
const pool = new Pool({
    host: db.host,
    database: db.database,
    user: db.options.user,
    password: db.options.password,
    port: db.port,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})
module.exports = pool