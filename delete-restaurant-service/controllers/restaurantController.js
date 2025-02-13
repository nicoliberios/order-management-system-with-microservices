const Restaurant = require('../models/restaurantModel');

const deleteRestaurant = async (req, res) => {
  try {
    const result = await Restaurant.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteRestaurant
};
