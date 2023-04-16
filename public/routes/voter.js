const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voter');
router.post('/register', voterController.create);
module.exports = router;