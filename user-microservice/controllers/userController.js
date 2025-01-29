const User = require('../models/userModel');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Insert the new user
    const result = await User.create({ username, email, password, role });
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await User.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a user by their ID
const getUserById = async (req, res) => {
  try {
    const result = await User.getById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Update the user
    const result = await User.update(req.params.id, { username, email, password, role });
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const result = await User.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
