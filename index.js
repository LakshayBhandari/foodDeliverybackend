const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

const organizationRoutes = require('./routes/organizationRoutes');
const itemRoutes = require('./routes/itemRoutes');
const pricingRoutes = require('./routes/pricingRoutes');

// Middleware
app.use(express.json());

// Use Routes
app.use("/organizations", organizationRoutes);
app.use("/items", itemRoutes);
app.use("/pricing", pricingRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
