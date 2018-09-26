var mongoose = require('mongoose');

//Schema can be invalid for some cases. Found few mixed data types, still didn't want to use strict:false.
var commentSchema = new mongoose.Schema({
    ID: {
        type: 'String'
    },
    Comment: {
		type: 'String'
	}
})

var comment =  mongoose.model('comment', commentSchema);

module.exports = comment;