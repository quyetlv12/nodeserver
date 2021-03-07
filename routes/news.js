const express = require('express')
const router = express.Router()
const newController = require('../controller/NewController');

router.use('/', newController.index);


module.exports = router;