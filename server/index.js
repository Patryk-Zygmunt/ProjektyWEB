var connect = require('connect');
var serveStatic = require('serve-static');
connect().use( serveStatic("../../Angular\HelloWorls\dist\HelloWorls")).listen(5000);

const bodyParser = require("body-parser");
var express = require('express');
var service = require('./service');
var app = express();
app.use(bodyParser.json());
app.get('/tours', (req, res) =>{
    service.getTours(res);
})

app.get('/tour', (req, res) =>{
    service.getTour(req.param.bind, res);
})

app.post('/tour', (req, res) =>{
    service.getTour(req.body, res);
})

app.delete('/tour', (req, res) =>{
    service.deleteTour(req.body, res);
})

app.put('/tour', (req, res) =>{
    service.updateTour(req.body, res);
})

app.listen(3000);