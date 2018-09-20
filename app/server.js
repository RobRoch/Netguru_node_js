const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('../config');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb + config.mongodbCollection, {useNewUrlParser: true});

app.set('view engine', 'ejs')
   .set('views', path.join(__dirname, '../views'))
   .use(express.static(path.join(__dirname, '../public')))
   .use(bodyParser.json({limit: '50mb'}))
   .use(bodyParser.urlencoded({limit: '50mb', extended: false}))
   .use('/', router)
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));



module.exports = app;
