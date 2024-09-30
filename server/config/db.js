// server/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'cecytev',
    host: 'localhost',
    database: 'cecytevDB',
    password: 'micontraseña',
    port: 5432,
});

module.exports = pool;
