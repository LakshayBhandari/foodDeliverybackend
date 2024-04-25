const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

priceCalculationValidationRules = () => [
  body('zone').trim().notEmpty().withMessage('Zone is required'),
  body('organization_id').isInt().withMessage('Organization ID must be an integer'),
  body('total_distance').isFloat({ min: 0 }).withMessage('Total distance must be a non-negative number'),
  body('item_type').isIn(['perishable', 'non-perishable']).withMessage('Invalid item type')
];

exports.priceCalculationValidationRules = () => [
  body('zone').trim().notEmpty().withMessage('Zone is required'),
  body('organization_id').isInt().withMessage('Organization ID must be an integer'),
  body('total_distance').isFloat({ min: 0 }).withMessage('Total distance must be a non-negative number'),
  body('item_type').isIn(['perishable', 'non-perishable']).withMessage('Invalid item type')
];

module.exports = {
  validate,
};
