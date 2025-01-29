const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Restaurants read Service',
      version: '1.0.0',
      description: 'API para leer restaurantes',
    },
    servers: [
      {
        url: 'http://localhost:4020',
      },
    ],
  },
  apis: ['./routes/restaurantRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
