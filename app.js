const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const cities = require('./routes/cities');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', cities);

module.exports = app;
