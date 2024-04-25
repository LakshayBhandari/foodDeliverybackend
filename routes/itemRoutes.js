const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');
/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Management of items
 */

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     description: Adds a new item to the inventory.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *               - description
 *             properties:
 *               type:
 *                 type: string
 *                 description: The type of the item, such as 'perishable' or 'non-perishable'.
 *                 example: 'perishable'
 *               description:
 *                 type: string
 *                 description: A detailed description of the item.
 *                 example: 'Fresh organic apples.'
 *     responses:
 *       201:
 *         description: Item created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Item created'
 *                 item:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The ID of the item.
 *                       example: 1
 *                     type:
 *                       type: string
 *                       example: 'perishable'
 *                     description:
 *                       type: string
 *                       example: 'Fresh organic apples.'
 *       400:
 *         description: Invalid input, object invalid.
 */
router.post('/', [
  body('type').isIn(['perishable', 'non-perishable']).withMessage('Invalid item type'),
  body('description').trim().notEmpty().withMessage('Description is required'),
], validate, itemController.createItem);

module.exports = router;
