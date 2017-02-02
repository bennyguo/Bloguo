var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article', function(req, res, next) {
  res.render('article', { title: 'Express' });
});

var tmpdata1 = {
					title: 'My First Article',
					url: 'https://www.baidu.com',
					year: 2017,
					month: 1,
					day: 15,
					hour: 13,
					minute: 45,
					second: 30,
					nvisits: 1367,
					ncomments: 15,
					tag: 'javascript',
					abstract: 'This is my new home! Welcome to visit!'
				};

var tmpdata2 = {
					title: 'My Second Article',
					url: 'https://www.baidu.com',
					year: 2017,
					month: 1,
					day: 13,
					hour: 11,
					minute: 11,
					second: 02,
					nvisits: 211,
					ncomments: 1,
					tag: 'javascript',
					abstract: 'This is my new home! Welcome to visit!'
				};

var tmparticle = {
					title: 'My First Article',
					url: 'https://www.baidu.com',
					year: 2017,
					month: 1,
					day: 15,
					hour: 13,
					minute: 45,
					second: 30,
					nvisits: 1367,
					ncomments: 15,
					tag: 'javascript',
					text: 'This is my new home! Welcome to visit!'
				};

router.get('/articles', function(req, res, next) {
	res.json({
		status: 'ok',
		dataset: [
			tmpdata1,
			tmpdata2
		]
	})
})

router.get('/article/test', function(req, res, next) {
	res.json({
		status: 'ok',
		data: tmparticle
	})
})

module.exports = router;
