const express = require('express');
const { createPaymentIntent } = require('../controllers/paymentController');

const router = express.Router();

router.route('/payment-intent')
    .post(createPaymentIntent);

module.exports = router;
