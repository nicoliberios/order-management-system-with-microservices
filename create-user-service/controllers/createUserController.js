const CreateUser = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Crear el usuario
        const result = await CreateUser.create({ username, email, password, role });
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createUser };
