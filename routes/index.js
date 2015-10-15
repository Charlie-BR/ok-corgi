var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
mongoose.connect('mongodb://ok_corgi:ok_corgi@ds039404.mongolab.com:39404/ok_corgi');

var Schema = mongoose.Schema;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', dogs: [] });
});

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

module.exports = router;
