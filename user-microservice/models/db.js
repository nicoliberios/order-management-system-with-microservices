const { Pool } = require('pg');

const pool = new Pool({
  host: 'dbpostgres.c5vvalnvdgee.us-east-1.rds.amazonaws.com', 
  port: 5432,
  user: process.env.DB_USER || 'postgres',  
  password: process.env.DB_PASSWORD || 'holaholahola1.', 
  database: process.env.DB_DATABASE || 'db-users'
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};

