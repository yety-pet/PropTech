const express = require('express');
const { sendLeaseRenewalAlerts } = require('../controllers/leaseController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/send-renewal-alerts')
    .post(protect, authorize('landlord'), sendLeaseRenewalAlerts);

module.exports = router;
