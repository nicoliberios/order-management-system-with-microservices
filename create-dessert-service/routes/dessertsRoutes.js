const express = require('express');
const router = express.Router();
const dessertsController = require('../controllers/dessertsController');

/**
 * @swagger
 * tags:
 *   name: Desserts
 *   description: API to manage desserts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Dessert:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: Dessert ID
 *         name:
 *           type: string
 *           description: Dessert name
 *         description:
 *           type: string
 *           description: Dessert description
 *       example:
 *         id: 1
 *         name: Chocolate Cake
 *         description: Delicious chocolate cake with cream
 */

/**
 * @swagger
 * /desserts:
 *   post:
 *     summary: Create a new dessert
 *     tags: [Desserts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dessert'
 *     responses:
 *       201:
 *         description: The dessert was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dessert'
 *       500:
 *         description: Server error
 */
router.post('/desserts', dessertsController.createDessert);

module.exports = router;


