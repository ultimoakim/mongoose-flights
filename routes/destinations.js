var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');


// All routes start with route.

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);



module.exports = router;