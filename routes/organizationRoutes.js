const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');

router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
], validate, organizationController.createOrganization);

module.exports = router;
