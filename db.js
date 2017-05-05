// db.js
var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.mongodbconnection.remote);