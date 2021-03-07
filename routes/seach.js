const express = require('express')
const router = express.Router()
const newController = require('../controller/SiteController');

router.use('/', newController.index);


module.exports = router;