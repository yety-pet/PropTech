const express = require('express');
const { registerUser, loginUser, resetPassword, forgotPassword, resetPasswordWithToken } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reset-password', resetPassword);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPasswordWithToken);

module.exports = router;
