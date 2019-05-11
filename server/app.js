const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

require('./database/models/db');

const app = express();

app.use(logger('dev')); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', require('./database/index'));

module.exports = app;