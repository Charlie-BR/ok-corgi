var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var dogModel = require('../models/dog.js')
mongoose.connect('mongodb://ok_corgi:ok_corgi@ds039404.mongolab.com:39404/ok_corgi');

var Schema = mongoose.Schema;

// dog schema from the dog.js model ** figure out how to relate the dog.js model
var dogSchema = new Schema({
    dogName: String,
    dogPic: String,
});

var Dog = mongoose.model('Dog', dogSchema);
console.log(Dog);

/* GET home page. */
router.get('/', function(req, res, next) {
	var dog = function(){
		Dog.count(function(err, count){
			if(err){
				var dog = null;
			} else {
				var i = Math.floor(Math.random()*count);
			}	
		});
	}
  // res.render('index', { title: 'Express', dogs: [] });
});

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

module.exports = router;
