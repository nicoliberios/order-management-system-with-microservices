const db = require('./db');

const Desserts = {
  create: async (data) => {
    const { name, description } = data;
    const query = `
      INSERT INTO desserts (name, description) 
      VALUES ($1, $2) RETURNING *`;
    const values = [name, description];
    return db.query(query, values);
  }
};

module.exports = Desserts;

