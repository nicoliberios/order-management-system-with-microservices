const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Restaurants API',
      version: '1.0.0',
      description: 'RESTful API for managing restaurant information'
    },
    servers: [
      {
        url: 'http://localhost:4013/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] // Files with Swagger annotations
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
