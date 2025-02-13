const Restaurant = require('../models/restaurantModel');

const updateRestaurant = async (req, res) => {  
  try {
    const result = await Restaurant.update(req.params.id, req.body);  
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Restaurant not found' });  
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateRestaurant 
};
