"use strict";

const express = require('express');
const knowitRoutes = express.Router();

// Require Knowit model in our routes module
var Knowit = require('../model/knowit.model');

// Defined store route
knowitRoutes.route('/knowit/add').post(function (req, res) {
  let knowit = new Knowit(req.body);
  knowit.save()
    .then(knowit => {
      res.status(200).json({'knowit': 'question is added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Filter with query_text
knowitRoutes.route('/knowit/search/:tag_name').get(function (req, res) {
  let tag_name = req.params.tag_name;
  Knowit.find({ tag_name: tag_name }, function(err, data){
    res.json(data);
  });
});

// Defined get data(index or listing) route
knowitRoutes.route('/knowit/').get(function (req, res) {
  Knowit.find({ question: {$exists: true} }, function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// Defined edit route
knowitRoutes.route('/knowit/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Knowit.findById(id, function (err, data){
      res.json(data);
  });
});

// Defined delete | remove | destroy route
knowitRoutes.route('/knowit/delete/:id').get(function (req, res) {
  Knowit.findByIdAndRemove({_id: req.params.id}, function(err, data){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = knowitRoutes;