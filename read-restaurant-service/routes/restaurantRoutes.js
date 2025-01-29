const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Returns a list of restaurants
 *     responses:
 *       200:
 *         description: List of restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID of the restaurant
 *                   name:
 *                     type: string
 *                     description: Name of the restaurant
 *                   capacity:
 *                     type: integer
 *                     description: Capacity of the restaurant
 *                   location:
 *                     type: string
 *                     description: Location of the restaurant
 *       500:
 *         description: Error while reading restaurant data
 */
router.get('/restaurants', restaurantController.listRestaurants);
router.get('/restaurants/:id', restaurantController.getRestaurantById);

module.exports = router;

