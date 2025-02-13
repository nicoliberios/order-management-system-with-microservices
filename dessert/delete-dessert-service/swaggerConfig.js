const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Desserts API',
      version: '1.0.0',
      description: 'RESTful API to manage desserts'
    },
    servers: [
      {
        url: 'http://localhost:4016/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] // Files with Swagger annotations
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
