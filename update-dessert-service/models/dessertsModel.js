const db = require('./db');

const Desserts = {
  update: async (id, data) => {
    const { name, description } = data;
    const query = `
      UPDATE desserts 
      SET name = $1, description = $2
      WHERE id = $3 RETURNING *`;
    const values = [name, description, id];
    return db.query(query, values);
  }
};

module.exports = Desserts;
