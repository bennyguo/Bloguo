var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleinfoSchema = new Schema({
	
	title: {type: String},
	abstract: {type: String},
	year: {type: Number},
	month: {type: Number},
	day: {type: Number},
	hour: {type: Number},
	minute: {type: Number},
	views: {type: Number},
	comments: {type: Number},
	
})

mongoose.model('Articleinfo', ArticleinfoSchema);