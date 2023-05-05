const express = require('express');
require('dotenv').config();
const AppError = require('./middleware/AppError');
const { globalErrorHandler } = require('./middleware/globalErrorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1>');
});
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});
// global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
