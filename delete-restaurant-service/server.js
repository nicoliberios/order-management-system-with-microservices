//Module Import
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const restaurantRoutes = require('./routes/restaurantRoutes');
const cors = require('cors');

//Server Configuration
const app = express();
const port = 4015;

//Test route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});


//CORS configuration
app.use(cors({
  origin: 'load balancer'
}));

javascript
//Body-parser middleware
app.use(bodyParser.json());
//API Routes
app.use('/api', restaurantRoutes);
//Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//Server Initialization
app.listen(port, () => {
  console.log(`delete-restaurant-service listening at http://localhost:${port}`);
});
