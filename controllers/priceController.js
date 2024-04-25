const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.calculatePrice = async (req, res) => {
  const { zone, organization_id, total_distance, item_type } = req.body;
  try {
    // Validate existence of organization
    const organizationExists = await prisma.organization.findUnique({
      where: { id: organization_id },
    });
    if (!organizationExists) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Validate existence of item type
    const itemExists = await prisma.item.findFirst({
      where: { type: item_type },
    });
    if (!itemExists) {
      return res.status(404).json({ error: 'Item type not found' });
    }

    // Find the relevant pricing information
    const pricing = await prisma.pricing.findFirst({
      where: {
        organizationId: organization_id,
        itemId: itemExists.id,  
        zone: zone,
      }
    });

    if (!pricing) {
      return res.status(404).json({ error: 'Pricing information not found for the given parameters.' });
    }

    // Calculate total price
    let totalPrice = pricing.fix_price; 
    if (total_distance > pricing.base_distance_in_km) {
      totalPrice += Math.round((total_distance - pricing.base_distance_in_km) * pricing.km_price);
    }

    res.json({ total_price: totalPrice });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};
