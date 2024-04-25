const express = require("express");
const { PrismaClient } = require("@prisma/client");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());  

const organizationRoutes = require('./routes/organizationRoutes');
const itemRoutes = require('./routes/itemRoutes');
const pricingRoutes = require('./routes/pricingRoutes');

// Use Routes for APIs
app.use("/organizations", organizationRoutes);
app.use("/items", itemRoutes);
app.use("/pricing", pricingRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: "Food Delivery Backend ",
  customCss: '.swagger-ui .topbar { display: none }',
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
