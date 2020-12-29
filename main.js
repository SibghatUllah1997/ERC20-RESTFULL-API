const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const routes = require('./routes/routes');



app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.use('/', routes);

const PORT = process.env.port || 3000;

app.listen(PORT , ()=>{
    console.log(`express is connected with ${PORT}`)
});