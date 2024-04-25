const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createItem = async (req, res) => {
  const { type, description } = req.body;
  try {
    const item = await prisma.item.create({
      data: { type, description }
    });
    res.status(201).json({ message: 'Item created', item });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
