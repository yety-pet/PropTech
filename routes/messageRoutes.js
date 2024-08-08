const express = require('express');
const { sendMessage } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware'); // Ensure that the user is authenticated

const router = express.Router();

router.route('/send')
    .post(protect, sendMessage);

module.exports = router;
