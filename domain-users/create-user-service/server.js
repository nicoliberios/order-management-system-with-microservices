const express = require('express');
const bodyParser = require('body-parser');
const createUserRoutes = require('./routes/createUserRoutes');

const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use('/api', createUserRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Create User Service running on port ${port}`);
});
