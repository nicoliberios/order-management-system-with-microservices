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
 *         - id
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
 * /desserts/{id}:
 *   delete:
 *     summary: Delete a dessert by ID
 *     tags: [Desserts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the dessert to delete
 *     responses:
 *       204:
 *         description: The dessert was deleted
 *       404:
 *         description: The dessert was not found
 *       500:
 *         description: Server error
 */
router.delete('/desserts/:id', dessertsController.deleteDessert);


module.exports = router;


