const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');

const keywordRoute = require('./routes/search.route');
const questionRoute = require('./routes/question.route');
// const revelationRoute = require('./routes/revelation.route');

mongoose.Promise = global.Promise;
console.log(config);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use('/', keywordRoute, questionRoute, revelationRoute);
app.use('/', keywordRoute, questionRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});