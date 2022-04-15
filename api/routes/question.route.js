"use strict";

const express = require('express');
const questionRoute = express.Router();

// Require Question model in our routes module
var Question = require('../model/question.model');

// Defined store route
questionRoute.route('/:language(en|ta)/question/add').post(function (req, res) {
  let question = new Question(req.body);
  question.save()
    .then(question => {
      res.status(200).json({'question': 'question added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Filter with query_text
questionRoute.route('/:language(en|ta)/question/:value').get(function (req, res) {
  let value = req.params.value;
  Question.find({ value: value }, function(err, data){
    res.json(data);
  });
});

// Defined get data(index or listing) route
questionRoute.route('/:language(en|ta)/question/').get(function (req, res) {
  // let language = req.params.language;
  // Question.find({ title: {$exists: true}, language: language }, function(err, data){
  Question.find({ title: {$exists: true} }, function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// Defined edit route
questionRoute.route('/:language(en|ta)/question/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Question.findById(id, function (err, data){
      res.json(data);
  });
});

// Defined update route
questionRoute.route('/:language(en|ta)/question/update/:id').post(function (req, res) {
  Question.findById(req.params.id, function(err, question) {
    if (!question)
      res.status(404).send("data is not found");
    else {
      question.tag_name = req.body.tag_name;
      question.title = req.body.title;
      question.answer = req.body.answer;
      question.reference = req.body.reference;
      question.lang = req.body.lang;
      question.bible = req.body.bible;

      question.save().then(question => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
questionRoute.route('/:language(en|ta)/question/delete/:id').get(function (req, res) {
  Question.findByIdAndRemove({_id: req.params.id}, function(err, data){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

// delete bibleverse
questionRoute.route('/:language(en|ta)/question/delete/bibleverse/:id/:verseid').get(function (req, res) {
  Question.findByIdAndUpdate(req.params.id, { $pull: { 'bible': { _id: req.params.verseid }} }, function(err, data){
    if(err) res.json(err);
    else res.json('Bible verse deleted');
  });
});

module.exports = questionRoute;