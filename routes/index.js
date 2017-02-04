var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article', function(req, res, next) {
  res.render('article', { title: 'Express' });
});

var tmparticle = {
					id: 10001,
					title: 'My First Article',
					url: 'https://www.baidu.com',
					year: 2017,
					month: 1,
					day: 15,
					hour: 13,
					minute: 45,
					views: 1367,
					comments: 15,
					categories: ['javascript', 'python'],
					abstract: 'This is my new home! Welcome to visit!',
					text: 'This is my new home! Welcome to visit!'
				};

router.get('/articles', function(req, res, next) {
	res.json({
		status: 'ok',
		dataset: [
			tmparticle,
			tmparticle
		]
	})
})

router.get('/article/test', function(req, res, next) {
	res.json({
		status: 'ok',
		data: tmparticle
	})
})

router.get('/article-list', function(req, res, next) {
	res.json({
		dataset: [
			tmparticle,
			tmparticle
		]
	})
})

router.get('/dashboard', function(req, res, next) {
	res.redirect('/dashboard/article');
})

router.get('/dashboard/article', function(req, res, next) {
	res.render('dashboard_article', {title: 'dashboard'})
})

router.get('/dashboard/category', function(req, res, next) {
	res.render('dashboard_category', {title: 'dashboard'})
})

module.exports = router;
