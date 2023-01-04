var express = require('express');
var router = express.Router();

/* GET home page. (experiencia.ejs) */
router.get('/', function(req, res, next) {
  res.render('experiencia.ejs', { title: 'Blog personal' });
});

module.exports = router;
