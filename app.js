const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const loginRoute = require('./route/login');
const chatRoute = require('./route/chat');
const dataRoute = require('./route/data')

app.use(bodyParser.urlencoded({extended:false}));

app.use('/login',loginRoute);
app.use('/',chatRoute);
app.use('/data', dataRoute)

app.listen(3000);