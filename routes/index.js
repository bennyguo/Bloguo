var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article', function(req, res, next) {
  res.render('article', { title: 'Express' });
});

module.exports = router;
