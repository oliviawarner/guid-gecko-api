const express = require('express');
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
            url: 'http://localhost:3000',
            description: 'Development server',
        },
        {
            url:'https://vercel.com/oliviawarners-projects/guid-gecko-api/GVgXqFEf7LHqtyYT8pxYapiCUXQd',
            description: 'Vercel server'
        }
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./index.js'], // Paths to files containing OpenAPI definitions
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

const app = express();
const port = process.env.PORT || 3000;

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health Check
 *     description: Returns the status of the API.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: GUID Gecko API is running
 */
app.get('/api/health', (req, res) => {
    res.json({ status: 'GUID Gecko API is running' });
});

// Swagger setup
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
