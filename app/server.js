const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.set('view engine', 'ejs')
   .set('views', path.join(__dirname, '../views'))
   .use(express.static(path.join(__dirname, '../public')))
   .use(bodyParser.json({limit: '50mb'}))
   .use(bodyParser.urlencoded({limit: '50mb', extended: false}))
   .use('/', router)
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

mongoose.connect('mongodb://Rob:nodetestmlab1@ds123012.mlab.com:23012/node_js_testing', {useNewUrlParser: true});


module.exports = app;
