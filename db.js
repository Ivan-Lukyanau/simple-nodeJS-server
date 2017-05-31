// db.js
var config = require('./config');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(config.mongodbconnection.local);