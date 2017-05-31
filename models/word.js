// word.js

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var WordSchema = Schema({
    input: String,
    output: String,
    direction: String,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Word', WordSchema);