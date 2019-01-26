var mongoose = require('mongoose');

var MoviesSchemas = require('../schemas/movies');

var movie = mongoose.model('movie',MoviesSchemas);

module.exports = movie;