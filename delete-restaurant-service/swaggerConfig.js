const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delete restaurant API',
      version: '1.0.0',
      description: 'RESTful API for deleting restaurant information'
    },
    servers: [
      {
        url: 'http://localhost:4015/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
