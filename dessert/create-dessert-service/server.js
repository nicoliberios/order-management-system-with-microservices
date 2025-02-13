const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./dessertsConfig');
const dessertsRoutes = require('./routes/dessertsRoutes');
const cors = require('cors');

const app = express();
const port = 4014;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});


app.use(cors({
  origin: 'add load balancer'
}));

app.use(bodyParser.json());
app.use('/api', dessertsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Desserts service listening at http://localhost:${port}`);
  console.log(`Desserts service listening at http://localhost:${port}/api/desserts`);
  console.log(`Desserts service listening at http://localhost:${port}/api-docs`);
});
