const Desserts = require('../models/dessertsModel');

const deleteDessert = async (req, res) => {
  try {
    const result = await Desserts.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Dessert not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    deleteDessert
};
