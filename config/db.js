const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.connect((err, client, release) => {
    if(err){
        return console.error('Error getting client', err.stack);
    }
    console.log('Connected to PostgreSQL database');
    release();
});

module.exports = pool;