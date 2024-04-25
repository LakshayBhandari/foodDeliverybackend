const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPricing = async (req, res) => {
  const { organizationId, itemId, zone, base_distance_in_km, km_price, fix_price } = req.body;
  try {
    const pricing = await prisma.pricing.create({
      data: {
        organizationId,
        itemId,
        zone,
        base_distance_in_km,
        km_price,
        fix_price
      }
    });
    res.status(201).json({ message: 'Pricing created', pricing });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
