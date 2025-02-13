const Restaurant = require('../models/restaurantModel');

const createRestaurant = async (req, res) => {
  try {
    const result = await Restaurant.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createRestaurant
};