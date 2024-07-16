const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'GUID Gecko API',
        version: '1.0.0',
        description: 'API documentation for GUID Gecko',
    },
    servers: [
        {
            url: 'http://localhost:3000', // Change this to your production URL
            description: 'Development server',
        },
        {
            url:'https://guid-gecko-api.vercel.app/',
            description: 'Vercel server'
        }
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['index.js'], // Paths to files containing OpenAPI definitions
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
