const db = require('./db');

const Restaurant = {
  create: async (data) => {
    const { name, capacity, location } = data;
    const query = `
      INSERT INTO restaurant_tables (name, capacity, location) 
      VALUES ($1, $2, $3) RETURNING *`;
    const values = [name, capacity, location];
    return db.query(query, values);
  }
};

module.exports = Restaurant;
