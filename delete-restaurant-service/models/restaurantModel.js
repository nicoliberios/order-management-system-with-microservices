const db = require('./db');

const Restaurant = {
  delete: async (id) => {
    const query = 'DELETE FROM restaurant_tables WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Restaurant;
