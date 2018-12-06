const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js')

const app = express();
const port = 4898;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port);