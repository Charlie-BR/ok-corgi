var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var dogModel = require('../models/dog.js')

mongoose.connect('mongodb://'+process.env.WDI_MONGOLAB_USER+':'+process.env.WDI_MONGOLAB_PW+'@ds039404.mongolab.com:39404/ok_corgi');


var Schema = mongoose.Schema;

// dog schema from the dog.js model ** figure out how to relate the dog.js model
var dogSchema = new Schema({
    dogName: String,
    dogPic: String,
    dogLike: Boolean,
});

var Dog = mongoose.model('Dog', dogSchema);
// console.log(Dog);

/* GET home page. */
router.get('/', function(req, res, next) {

	var dog = function(){
		Dog.count(function(err, count){
			if(err){
				var dog = null;
				res.redirect("/");
			} else {
				var i = Math.floor(Math.random()*count);
				Dog.find({},function(err, dawg){
					var dog = dawg[i]["dogName"];
					var pic = dawg[i]["dogPic"];
					id = dawg[i]["_id"];
					console.log(dog);
					res.render('index', { title: 'hello', dog: dog, pic: pic});
				})
			}	
		});
	}
	dog();
});


/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {
	console.log(id);
});

module.exports = router;
