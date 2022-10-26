var express = require('express');
var router = express.Router();

/* Redirected to flights now */
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;
