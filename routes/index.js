var express = require('express');
var router = express.Router();

/* GET home page. */
var tmparticle = {
					id: '10001',
					title: 'My First Article',
					url: '/article/10001',
					year: 2017,
					month: 1,
					day: 15,
					hour: 13,
					minute: 45,
					views_count: 1367,
					comments_count: 15,
					categories_info: [{name:'javascript',url:'www.baidu.com',articles_count:15},{name:'python',url:'map.baidu.com',articles_count:4}],
					abstract: 'This is my new home! Welcome to visit!',
					full_text_html: '<h1>This is my new home!</h1><h3>Welcome to visit!</h3>'
				};

var tmpcategories = [
	{
		id: '100000001',
		name: 'javascript',
		url: 'map.baidu.com',
		articles_count: 15,
		articles: [10001],
	},
	{
		id: '100000002',
		name: 'python',
		url: 'www.baidu.com',
		articles_count: 2,
		articles: [10001],
	}
]


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/articles/:id', function(req, res, next) {
  res.render('article', { title: 'Express', id: req.params.id});
});

router.get('/api/articles', function(req, res, next) {
	res.json({
		status: 'ok',
		dataset: [
			tmparticle,
			tmparticle
		]
	})
})

router.get('/api/articles/:id', function(req, res, next) {
	res.json({
		status: 'ok',
		data: tmparticle
	})
})

router.get('/api/articles/:id/categories', function(req, res, next) {
	res.json({
		status: 'ok',
		data: [{id:'100000001',name:'javascript',checked:true},{id:'100000002',name:'python',checked:false}]
	})
})

router.post('/api/articles/categories', function(req, res, next) {
	var id = req.body.id;
	var categories = req.body.categories;
	console.log('change categories of ' + id + ' to ' + categories);
	res.json({status: 'ok'});
})

router.post('/api/articles/remove', function(req, res, next) {
	var id = req.body.id;
	console.log('del article: ' + id);
	res.json({status: 'ok'});
})

router.get('/api/categories', function(req, res, next) {
	res.json({
		status: 'ok',
		dataset: tmpcategories
	})
})

router.post('/api/categories/new', function(req, res, next) {
	var name = req.body.name;
	tmpcategories.push({name: name, id: 10000, url: 'www.baidu.com', articles_count: 100});
	console.log('add new category: ' + name);
	res.json({status: 'ok'});
})

router.post('/api/categories/edit', function(req, res, next) {
	var id = req.body.id;
	var name = req.body.name;
	console.log('rename category: ' + id + ' to ' + name);
	res.json({status: 'ok'});
})

router.post('/api/categories/remove', function(req, res, next) {
	var id = req.body.id;
	console.log('del category: ' + id);
	res.json({status: 'ok'});
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
