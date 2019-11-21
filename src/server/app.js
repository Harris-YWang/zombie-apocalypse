const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const indexRouter = require('./routes/index');

app.use(cors());

app.use(bodyParser.json());

app.use('/api', indexRouter);

module.exports = app;
