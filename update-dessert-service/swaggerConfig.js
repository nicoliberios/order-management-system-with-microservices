const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Desserts API',
      version: '1.0.0',
      description: 'RESTful API for managing dessert information'
    },
    servers: [
      {
        url: 'http://localhost:4011/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

