"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Question
var Question = new Schema({
  question: {
    type: String
  },
  tag_name: [{
    type: String
  }],
  value: {
    type: String
  },
  bible: [{
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
  }]
},{
  collection: 'manager'
}); 

module.exports = mongoose.model('Question', Question);