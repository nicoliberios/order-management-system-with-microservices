const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: API for managing restaurants
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       required:
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
 *         name: Restaurant La Plaza
 *         capacity: 150
 *         location: Av Buenos Aires
 */

/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: The restaurant was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Server error
 */
router.post('/restaurants', restaurantController.createRestaurant);

module.exports = router;

