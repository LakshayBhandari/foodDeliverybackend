const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Food Delivery API',
      version: '1.0.0',
      description: 'This is a simple API for a food delivery app with dynamic pricing',
    },
    servers: [
      {
        url: 'https://fooddeliverybackend-nu7z.onrender.com',
        description: 'Production Server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
