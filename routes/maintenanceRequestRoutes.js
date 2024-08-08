// const express = require('express');
// const { createRequest, getRequests, updateRequest } = require('../controllers/maintenanceRequestController');
// const { protect, restrictTo } = require('../middleware/authMiddleware');

// const router = express.Router();

// // Routes for tenants and property managers
// router.route('/')
//     .post(protect, createRequest); // Submit request

// router.route('/:propertyId')
//     .get(protect, restrictTo('property manager'), getRequests); // Get all requests for a property

// router.route('/update/:requestId')
//     .put(protect, restrictTo('property manager'), updateRequest); // Update request status

// module.exports = router;
