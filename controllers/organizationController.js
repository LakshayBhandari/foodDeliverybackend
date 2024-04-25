const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrganization = async (req, res) => {
  const { name } = req.body;
  try {
    const organization = await prisma.organization.create({
      data: { name }
    });
    res.status(201).json({ message: 'Organization created', organization });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};
