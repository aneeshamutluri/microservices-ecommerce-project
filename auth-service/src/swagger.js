const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path'); 

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth Service API',
      version: '1.0.0',
      description: 'Authentication service for the E-commerce system',
    },
    servers: [
      {
        url: 'http://localhost:5001',
        description: 'Direct Auth Service',
      },
      {
        url: 'http://localhost:5000/auth',
        description: 'API Gateway Auth Path',
      }
    ],
  },
  apis: [path.join(__dirname, 'index.js')], 
};

const specs = swaggerJsdoc(options);
module.exports = specs;