const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const { body } = require('express-validator');
const { validate } = require('../middlewares/validationMiddleware');


/**
 * @swagger
 * tags:
 *   name: Organizations
 *   description: Management of organizations
 */

/**
 * @swagger
 * /organizations:
 *   post:
 *     summary: Create a new organization
 *     tags: [Organizations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the organization.
 *     responses:
 *       201:
 *         description: Organization created successfully.
 *       400:
 *         description: Invalid input, object invalid.
 */
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
], validate, organizationController.createOrganization);

module.exports = router;
