// manager.route.js

const express = require('express');
const managerRoutes = express.Router();

// Require Manager model in our routes module
let Manager = require('./manager.model');

// Defined store route
managerRoutes.route('/add').post(function (req, res) {
  let manager = new Manager(req.body);
  manager.save()
    .then(manager => {
      res.status(200).json({'manager': 'manager in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
managerRoutes.route('/').get(function (req, res) {
  Manager.find(function(err, managers){
    if(err){
      console.log(err);
    }
    else {
      res.json(managers);
    }
  });
});

// Defined edit route
managerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Manager.findById(id, function (err, manager){
      res.json(manager);
  });
});

//  Defined update route
managerRoutes.route('/update/:id').post(function (req, res) {
  Manager.findById(req.params.id, function(err, manager) {
    if (!manager)
      res.status(404).send("data is not found");
    else {
        manager.tag_name = req.body.tag_name;
        manager.book_name = req.body.book_name;
        manager.chapter_number = req.body.chapter_number;
        manager.verse_number = req.body.verse_number;

        manager.save().then(manager => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
managerRoutes.route('/delete/:id').get(function (req, res) {
  Manager.findByIdAndRemove({_id: req.params.id}, function(err, manager){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = managerRoutes;