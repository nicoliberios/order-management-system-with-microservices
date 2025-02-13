const Desserts = require('../models/dessertsModel');

const updateDessert = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedDessert = req.body;
    const result = await Desserts.update(id, updatedDessert);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Dessert not found' });
    }
    res.json({ message: 'Dessert updated successfully', dessert: updatedDessert });
  } catch (err) {
    console.error('Error updating dessert:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateDessert
};
