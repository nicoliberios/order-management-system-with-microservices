const Desserts = require('../models/dessertsModel');

const createDessert = async (req, res) => {
  try {
    const result = await Desserts.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createDessert
};

