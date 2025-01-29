const db = require('../models/db');

const User = {
  // Create a new user
  create: async (data) => {
    const { username, email, password, role } = data;
    const query = `
      INSERT INTO user_profiles (username, email, password, role) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [username, email, password, role];
    return db.query(query, values);
  },

  // Get all users
  getAll: async () => {
    const query = 'SELECT * FROM user_profiles';
    return db.query(query);
  },

  // Get a user by ID
  getById: async (id) => {
    const query = 'SELECT * FROM user_profiles WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  },

  // Update a user
  update: async (id, data) => {
    const { username, email, password, role } = data;
    const query = `
      UPDATE user_profiles
      SET username = $1, email = $2, password = $3, role = $4
      WHERE id = $5 RETURNING *`;
    const values = [username, email, password, role, id];
    return db.query(query, values);
  },

  // Delete a user
  delete: async (id) => {
    const query = 'DELETE FROM user_profiles WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = User;
