const express = require('express');
const router = express.Router();
const dessertsController = require('../controllers/dessertsController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Dessert:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - description
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
 *         description: A rich and moist chocolate cake with fudge topping
 */

/**
 * @swagger
 * tags:
 *   name: Desserts
 *   description: API for managing desserts
 */

/**
 * @swagger
 * /desserts/{id}:
 *   put:
 *     summary: Update a dessert by ID
 *     tags: [Desserts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Dessert ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dessert'
 *     responses:
 *       200:
 *         description: The dessert was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dessert'
 *       404:
 *         description: Dessert not found
 *       500:
 *         description: Server error
 */
router.put('/desserts/:id', dessertsController.updateDessert);

module.exports = router;

