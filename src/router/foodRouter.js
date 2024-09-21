const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');

// Define the route
router.get('/search/:search', foodController.getFoodid); 
router.get('/items/:page/:limit', foodController.getFoodDetails);  
router.get('/items/:page/:limit/:search', foodController.getFoodDetailsSearch); 
// Export the router
module.exports = router;
