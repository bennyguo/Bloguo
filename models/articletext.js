var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticletextSchema = Schema({
	text: {type: String},
	is_markdown: {type: Boolean}
});

mongoose.model('Articletext', ArticletextSchema);