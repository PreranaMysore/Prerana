'use strict';

const config = require('./config');
const _ = require('underscore');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const express = require('express');
const jsonResponse = require('./utils/json-response');
const index = require('./routes/index');
const errors = require('./helpers/errors');
const app = express();


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.use(morgan('dev'));
app.use('/', index);

/* Routes classifications */
app.use((req, res) => {
  if (config.mode === 'development') {
    console.log('Error: No route found or Wrong method name');
    jsonResponse(res, errors.resourceNotFound(false), null);
  } else {
    jsonResponse(res, errors.resourceNotFound(true), null);
  }
});

app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT || config.port;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
