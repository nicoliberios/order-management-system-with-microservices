const db = require('./db');

const Desserts = {
  delete: async (id) => {
    const query = 'DELETE FROM desserts WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Desserts;
