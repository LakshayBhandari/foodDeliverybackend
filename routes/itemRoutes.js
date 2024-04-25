const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');

router.post('/', [
  body('type').isIn(['perishable', 'non-perishable']).withMessage('Invalid item type'),
  body('description').trim().notEmpty().withMessage('Description is required'),
], validate, itemController.createItem);

module.exports = router;
