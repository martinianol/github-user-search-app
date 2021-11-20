const express = require('express');
const router = express.Router();

//Controller required
const controller = require('../api/githhub');

//Routing

router.get('/', controller.landing);
router.get('/user', controller.user);

module.exports = router;