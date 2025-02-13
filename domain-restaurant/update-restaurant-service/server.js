const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const restaurantRoutes = require('./routes/restaurantRoutes'); 
const cors = require('cors');

const app = express();
const port = 4010;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'update-restaurant-service Running' });
});


// This allows security between the front and the back
app.use(cors({
  origin: 'load balancer'
}));

// These are the URLs
app.use(bodyParser.json());
app.use('/api', restaurantRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`update-restaurant-service listening at http://localhost:${port}`);  
});

