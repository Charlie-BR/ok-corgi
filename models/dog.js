// Dog model w/ Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    dogName: String,
    dogPic: String,
});