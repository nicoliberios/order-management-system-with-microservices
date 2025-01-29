const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const restaurantRoutes = require('./routes/restaurantRoutes');
const cors = require('cors');

const app = express();
const port = 4013;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'create-restaurant-service Running' });
});


app.use(cors({
  origin: 'load balancer'
}));

app.use(bodyParser.json());
app.use('/api', restaurantRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`create-restaurant-service listening at http://localhost:${port}`);
  console.log(`create-restaurant-service listening at http://localhost:${port}/api/restaurants`);
  console.log(`create-restaurant-service listening at http://localhost:${port}/api-docs`);
});
