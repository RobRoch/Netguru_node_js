var mongoose = require('mongoose');

//Schema can be invalid for some cases. Found few mixed data types, still didn't want to use strict:false.
var movieSchema = new mongoose.Schema({
	Title: {
		type: 'String'
	},
	Year: {
		type: 'Mixed'
	},
	Rated: {
		type: 'String'
	},
	Released: {
		type: 'Mixed'
	},
	Runtime: {
		type: 'String'
	},
	Genre: {
		type: 'String'
	},
	Director: {
		type: 'String'
	},
	Writer: {
		type: 'String'
	},
	Actors: {
		type: 'String'
	},
	Plot: {
		type: 'String'
	},
	Language: {
		type: 'String'
	},
	Country: {
		type: 'String'
	},
	Awards: {
		type: 'String'
	},
	Poster: {
		type: 'String'
	},
	Ratings: {
		type: [
			'Mixed'
		]
	},
	Metascore: {
		type: 'String'
	},
	imdbRating: {
		type: 'Date'
	},
	imdbVotes: {
		type: 'Mixed'
	},
	imdbID: {
		type: 'String'
	},
	Type: {
		type: 'String'
    },
    totalSeasons: {
		type: 'Date'
	},
	DVD: {
		type: 'String'
	},
	BoxOffice: {
		type: 'String'
	},
	Production: {
		type: 'String'
	},
	Website: {
		type: 'String'
	},
	Response: {
		type: 'String'
	}
})

var movie =  mongoose.model('movie', movieSchema);

module.exports = movie;