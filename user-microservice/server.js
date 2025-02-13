const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Cargar configuración del archivo .env

const app = express();
const port = process.env.PORT || 4022; // Si no se especifica el puerto en .env, se usa 4022

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Users Microservice Running' });
});


app.use(cors({
  origin: 'http://54.85.92.48:80' 
}));

app.use(bodyParser.json());
app.use('/api', userRoutes); // Rutas de usuarios
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`User microservice listening at http://localhost:${port}`);
});
