// app.js

const express = require('express');
const app = express();
var routerBase = require('./routerBase');
const db = require('./db');

/* Controllers
==============================================================*/
const WordController = require('./controllers/wordController');
const HomeController = require('./controllers/homeController');

/* Router
==============================================================*/
var router = express.Router();
routerBase(router);
HomeController(router);
WordController(router);
    app.use('/api', router);


module.exports = app;