const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');


/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - capacity
 *         - location
 *       properties:
 *         id:
 *           type: integer
 *           description: ID of the restaurant
 *         name:
 *           type: string
 *           description: Name of the restaurant
 *         capacity:
 *           type: integer
 *           description: Capacity of the restaurant
 *         location:
 *           type: string
 *           description: Location of the restaurant
 *       example:
 *         id: 1
 *         name: El Buen Sabor
 *         capacity: 110
 *         location: La Tola
 */

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: API for updating restaurants
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   put:
 *     summary: Update a restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the restaurant to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       200:
 *         description: The restaurant was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: The restaurant was not found
 *       500:
 *         description: Server error
 */
router.put('/restaurants/:id', restaurantController.updateRestaurant);

module.exports = router;

