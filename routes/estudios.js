var express = require('express');
var router = express.Router();

/* GET home page. (estudios.ejs) */
router.get('/', function(req, res, next) {
  res.render('estudios.ejs', { title: 'Blog personal' });
});

module.exports = router;
