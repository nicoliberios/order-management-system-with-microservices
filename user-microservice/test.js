const { Pool } = require('pg');
require('dotenv').config();

// Create a connection pool using the dbConfig configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false // Allow connections without verifying the certificate
  }
});

// Successful connection
pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

// Perform a query to get all users
const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM user_profiles');
    console.log('Users from DB:', result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    // Close the connection when finished
    await pool.end();
  }
};

// Execute the function to get users
getUsers();
