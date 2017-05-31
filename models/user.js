// user.js

var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var UserSchema = Schema({
  userId: String,  
  wordsCollection: [{ type: Schema.Types.ObjectId, ref: 'Word' }] 
});

module.exports = mongoose.model('User', UserSchema);