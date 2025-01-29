const Restaurants = require('../models/restaurantModel');

const listRestaurants = async (req, res) => {
  try {
    const result = await Restaurants.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Restaurants.findById(id);
    if (!result) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listRestaurants,
  getRestaurantById,
};
