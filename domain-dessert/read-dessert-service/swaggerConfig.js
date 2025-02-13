const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Dessert Listing Service',
      version: '1.0.0',
      description: 'API to list desserts',
    },
    servers: [
      {
        url: 'http://localhost:4019',
      },
    ],
  },
  apis: ['./routes/dessertsRoutes.js'],  // Path to the API routes files
};


const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
