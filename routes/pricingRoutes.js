const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');
const { priceCalculationValidationRules} = require('../middlewares/priceValidationMiddleware');
const priceController = require('../controllers/priceController');


router.post('/', [
  body('organizationId').isInt().withMessage('Organization ID must be an integer'),
  body('itemId').isInt().withMessage('Item ID must be an integer'),
  body('zone').trim().notEmpty().withMessage('Zone is required'),
  body('base_distance_in_km').isInt().withMessage('Base distance must be an integer'),
  body('km_price').isFloat().withMessage('Per km price must be a float'),
  body('fix_price').isInt().withMessage('Fixed price must be an integer'),
], validate, pricingController.createPricing);

router.get('/calculate-price', priceCalculationValidationRules(), validate, priceController.calculatePrice);

module.exports = router;
