var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogerSchema = Schema({
	name: {type: String},
	introduction: {type: String},
	sex: {type: Boolean},
	usename: {type: String},
	password: {type: String},
	email: {type: String},
	article_count: {type: Number},
	view_count: {type: Number},
	comment_count: {type: Number}
});

mongoose.model('Bloger', BlogerSchema);