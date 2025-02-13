const db = require('./db');

const Desserts = {
  findAll: async () => {
    const query = 'SELECT * FROM desserts';
    return db.query(query);
  },
  
  findById: async (id) => {
    const query = 'SELECT * FROM desserts WHERE id = $1';
    const result = await db.query(query, [id]);
    return result; // Returns the complete result
  }
};

module.exports = Desserts;
