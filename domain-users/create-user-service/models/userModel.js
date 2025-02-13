const db = require('./db');

const CreateUser = {
    create: async (data) => {
        const { username, email, password, role } = data;
        const query = `
            INSERT INTO user_profiles (username, email, password, role)
            VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [username, email, password, role];
        return db.query(query, values);
    }
};

module.exports = CreateUser;
