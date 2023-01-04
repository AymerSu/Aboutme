var express = require('express');
var router = express.Router();

/* GET home page. (aboutme.ejs) */
router.get('/', function(req, res, next) {
  res.render('aboutme.ejs', { title: 'Blog personal' });
});

module.exports = router;
