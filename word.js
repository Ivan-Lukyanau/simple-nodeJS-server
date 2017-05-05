// word.js

var mongoose = require('mongoose');

var WordSchema = new mongoose.Schema({  
  input: String,
  output: String,
  direction: String
});

mongoose.model('Word', WordSchema);
module.exports = mongoose.model('Word');