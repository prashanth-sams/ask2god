"use strict";
// keywords.route.js

const express = require('express');
const keywordRoutes = express.Router();

// Require Keywords model in our routes module
var Keywords = require('../model/keywords.model');

// Defined store route
keywordRoutes.route('/keywords/add').post(function (req, res) {
  let keywords = new Keywords(req.body);
  keywords.save()
    .then(keywords => {
      res.status(200).json({'keywords': 'keywords added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
keywordRoutes.route('/keywords/').get(function (req, res) {
  Keywords.find({ book_name: {$exists: true} }, function(err, keywords){
    if(err){
      console.log(err);
    }
    else {
      res.json(keywords);
    }
  });
});

// Filter with tag_name
keywordRoutes.route('/keywords/search/:tag_name').get(function (req, res) {
  let tag_name = req.params.tag_name;
  Keywords.find({ tag_name: tag_name }, function(err, data){
    res.json(data);
  });
});

// Defined edit route
keywordRoutes.route('/keywords/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Keywords.findById(id, function (err, keywords){
      res.json(keywords);
  });
});

//  Defined update route
keywordRoutes.route('/keywords/update/:id').post(function (req, res) {
  Keywords.findById(req.params.id, function(err, keywords) {
    if (!keywords)
      res.status(404).send("data is not found");
    else {
        keywords.tag_name = req.body.tag_name;
        keywords.book_name = req.body.book_name;
        keywords.chapter_number = req.body.chapter_number;
        keywords.verse_number = req.body.verse_number;
        keywords.verse_context = req.body.verse_context;

        keywords.save().then(keywords => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
keywordRoutes.route('/keywords/delete/:id').get(function (req, res) {
  Keywords.findByIdAndRemove({_id: req.params.id}, function(err, keywords){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = keywordRoutes;