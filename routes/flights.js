var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

//GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/:id
router.get('/new', flightsCtrl.new);
// GET /flights/new
router.post('/', flightsCtrl.create);
// POST /flights
router.get('/:id', flightsCtrl.show);



module.exports = router;

