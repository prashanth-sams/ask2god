const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  tag_name: {
    type: String
  },
  book_name: {
    type: String
  },
  chapter_number: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);