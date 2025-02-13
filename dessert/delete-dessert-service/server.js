const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const dessertsRoutes = require('./routes/dessertsRoutes');
const cors = require('cors');

const app = express();
const port = 4016;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});


app.use(cors({
  origin: 'add url load balancer'
}));

app.use(bodyParser.json());
app.use('/api', dessertsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice delete desserts listening at http://localhost:${port}`);
});
