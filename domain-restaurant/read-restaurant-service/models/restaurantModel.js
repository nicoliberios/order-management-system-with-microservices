const db = require('./db');

const Restaurants = {
  findAll: async () => {
    const query = 'SELECT * FROM restaurant_tables';
    return db.query(query);
  },

  findById: async (id) => {
    const query = 'SELECT * FROM restaurant_tables WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
};

module.exports = Restaurants;
