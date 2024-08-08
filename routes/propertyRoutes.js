const express = require('express');
const { createProperty, getAllProperties, updateProperty, deleteProperty } = require('../controllers/propertyController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(protect, authorize('landlord', 'property buyer', 'property seller'), createProperty)
    .get(getAllProperties);

router.route('/:id')
    .put(protect, authorize('landlord', 'property buyer', 'property seller'), updateProperty)
    .delete(protect, authorize('landlord', 'property buyer', 'property seller'), deleteProperty);

module.exports = router;
