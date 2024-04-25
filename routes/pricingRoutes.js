const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');
const { priceCalculationValidationRules} = require('../middlewares/priceValidationMiddleware');
const priceController = require('../controllers/priceController');


/**
 * @swagger
 * tags:
 *   name: Pricing
 *   description: Pricing management and info
 */

/**
 * @swagger
 * /pricing:
 *   post:
 *     summary: Create pricing
 *     tags: [Pricing]
 *     description: Create a new pricing record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - organizationId
 *               - itemId
 *               - zone
 *               - base_distance_in_km
 *               - km_price
 *               - fix_price
 *             properties:
 *               organizationId:
 *                 type: integer
 *                 description: Unique identifier of the organization
 *               itemId:
 *                 type: integer
 *                 description: Unique identifier of the item
 *               zone:
 *                 type: string
 *                 description: Zone where the pricing applies
 *                 default: 'central'
 *               base_distance_in_km:
 *                 type: integer
 *                 description: Base distance in kilometers for the fixed price
 *               km_price:
 *                 type: number
 *                 format: float
 *                 description: Price per kilometer after the base distance
 *               fix_price:
 *                 type: integer
 *                 description: Fixed price up to the base distance in cents
 *     responses:
 *       201:
 *         description: Pricing record created successfully
 *       400:
 *         description: Invalid input data
 */

/**
/**
 * @swagger
 * /pricing/calculate-price:
 *   post:
 *     summary: Calculate the total price for delivery
 *     tags: [Pricing]
 *     description: Calculates the total price for delivering an item based on the zone, organization, item type, and distance.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [zone, organization_id, total_distance, item_type]
 *             properties:
 *               zone:
 *                 type: string
 *                 description: Zone where the delivery will take place
 *                 example: 'central'
 *               organization_id:
 *                 type: integer
 *                 description: ID of the organization responsible for the delivery
 *                 example: 1
 *               total_distance:
 *                 type: number
 *                 format: float
 *                 description: Total distance of the delivery in kilometers
 *                 example: 10
 *               item_type:
 *                 type: string
 *                 description: Type of the item being delivered (e.g., 'perishable', 'non-perishable')
 *                 example: 'perishable'
 *     responses:
 *       200:
 *         description: Successfully calculated the total price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: integer
 *                   description: Total price of the delivery in cents
 *                   example: 1500
 *       404:
 *         description: One of the resources (organization, item type, or pricing information) not found
 *       500:
 *         description: Internal server error
 */



router.post('/', [
  body('organizationId').isInt().withMessage('Organization ID must be an integer'),
  body('itemId').isInt().withMessage('Item ID must be an integer'),
  body('zone').trim().notEmpty().withMessage('Zone is required'),
  body('base_distance_in_km').isInt().withMessage('Base distance must be an integer'),
  body('km_price').isFloat().withMessage('Per km price must be a float'),
  body('fix_price').isInt().withMessage('Fixed price must be an integer'),
], validate, pricingController.createPricing);


router.post('/calculate-price', priceCalculationValidationRules(), validate, priceController.calculatePrice);

module.exports = router;
