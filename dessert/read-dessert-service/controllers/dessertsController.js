const Desserts = require('../models/dessertsModel');

const listDesserts = async (req, res) => {
  try {
    const result = await Desserts.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDessertById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Desserts.findById(id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Dessert not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listDesserts,
  getDessertById,
};
