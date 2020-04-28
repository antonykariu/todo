const express = require('express');

const app = express();
const morgan = require('morgan');

const accountRoutes = require('./api/routes/account');

app.use(morgan('dev'));
app.use('/account', accountRoutes);

module.exports = app;
