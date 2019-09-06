"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Manager
let Manager = new Schema({
  tag_name: [{
    type: String
  }],
  book_name: {
    type: String
  },
  chapter_number: {
    type: Number
  },
  verse_number: {
    type: String
  },
  verse_context: {
    type: String
  }
},{
    collection: 'manager'
});

module.exports = mongoose.model('Manager', Manager);