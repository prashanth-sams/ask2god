"use strict";
// search.route.js

const express = require("express");
const searchRoutes = express.Router();

// Require Search model in our routes module
const Search = require("../model/search.model");

// Defined store route
searchRoutes.route("/:language(en|ta)/search/add").post(function (req, res) {
  let search = new Search(req.body);
  
  search.save()
    .then(search => {
      res.status(200).json({'search': 'search keyword added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
searchRoutes.route("/:language(en|ta)/search/").get(function (req, res) {
  Search.find({ book_name: { $exists: true } }, function(err, search){
    if(err){
      console.log(err);
    } else {
      res.json(search);
    }
  });
});

// Filter with tag_name
searchRoutes.route('/:language(en|ta)/search/:tag_name').get(function (req, res) {
  let tag_name = req.params.tag_name;
  Search.find({ tag_name: tag_name }, function(err, data){
    res.json(data);
  });
});

// Defined edit route
searchRoutes.route('/:language(en|ta)/search/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Search.findById(id, function (err, search){
      res.json(search);
  });
});

//  Defined update route
searchRoutes.route('/:language(en|ta)/search/update/:id').post(function (req, res) {
  Search.findById(req.params.id, function(err, search) {
    if (!search)
      res.status(404).send("data is not found");
    else {
        search.tag_name = req.body.tag_name;
        search.book_name = req.body.book_name;
        search.chapter_number = req.body.chapter_number;
        search.verse_number = req.body.verse_number;
        search.verse_context = req.body.verse_context;

        search.save().then(search => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
searchRoutes.route('/:language(en|ta)/search/delete/:id').get(function (req, res) {
  Search.findByIdAndRemove({_id: req.params.id}, function(err, search){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = searchRoutes;