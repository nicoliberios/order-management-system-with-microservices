const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: API for deleting restaurants
 */

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
 *         capacity: 100
 *         location: La Recoleta
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   delete:
 *     summary: Delete a restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the restaurant to delete
 *     responses:
 *       204:
 *         description: The restaurant was deleted
 *       404:
 *         description: The restaurant was not found
 *       500:
 *         description: Server error
 */
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

module.exports = router;
