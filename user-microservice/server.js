const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Users Microservices Running' });
});

app.use(cors({
  origin: 'load balancer'
}));


app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`user-microservice listening at http://ec2-54-243-36-194.compute-1.amazonaws.com:${port}`);
});
