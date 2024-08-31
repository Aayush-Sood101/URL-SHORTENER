const express = require('express');
const {handleRedirectAndUpdate} = require('../controllers/redirect');
const router = express.Router();

router.get('/:shortId' , handleRedirectAndUpdate);

module.exports = router;