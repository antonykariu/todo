const express = require('express');

const app = express();
const morgan = require('morgan');

const taskRoutes = require('./api/routes/task');
const teamRoutes = require('./api/routes/team');
const projectRoutes = require('./api/routes/project');

app.use(morgan('dev'));
app.use('/tasks', taskRoutes);
// app.use('/teams', teamRoutes);
// app.use('/projects', projectRoutes);

module.exports = app;
