const express = require('express');
const router = express.Router();

const contactController =require('../controllers/contactController');

router.post('/contact-us', contactController.contactUs);

module.exports = router;