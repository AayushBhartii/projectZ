// Routes: claimRestaurantRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  changeRestaurantStatus
} = require('../controller/claimRestaurantController');

// Routes
router.get('/restaurants', getAllRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.post('/restaurants', createRestaurant);
router.put('/restaurants/:id', updateRestaurant);
router.put('/restaurants/:id/status', changeRestaurantStatus);
router.delete('/restaurants/:id', deleteRestaurant);

module.exports = router;