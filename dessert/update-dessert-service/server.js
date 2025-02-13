const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const dessertRoutes = require('./routes/dessertsRoutes');
const cors = require('cors');

const app = express();
const port = 4011;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});

app.use(cors({
  origin: 'add url load balancer'
}));


app.use(bodyParser.json());
app.use('/api', dessertRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
  console.log(`Dessert microservice is running at http://localhost:${port}`);
});
