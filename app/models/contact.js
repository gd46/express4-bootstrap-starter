var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');
var crypto = require('crypto');
var oAuthTypes = ['twitter', 'facebook', 'google'];


var ContactSchema = new Schema({
	firstname: {
		type: String,
		require: true
	},
	lastname: {
		type: String,
		require: true
	},
	phonenumber: {
		type: Number,
		require: true 
	}
});

// ContactSchema.methods = {
// 	save: function(){
// 		var self = this;
// 		self.save(function(err, doc){
// 			if(err) return console.error(err);
// 			console.dir(doc);
// 		});
// 	}
// };


module.exports = mongoose.model('Contact', ContactSchema);