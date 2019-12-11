var connect = require('connect');
var serveStatic = require('serve-static');
connect().use( serveStatic("../../Angular\HelloWorls\dist\HelloWorls")).listen(5000);

var cors = require('cors')
const bodyParser = require("body-parser");
var express = require('express');
var service = require('./service');
var app = express();
app.use(cors())

app.use(bodyParser.json());

app.get('/tour/all', (req, res) =>{
    service.getTours(res);
})

app.get('/tour/:id', (req, res) =>{
    service.getTour(req.params.id, res);
})

app.post('/tour', (req, res) =>{
    service.addTour(req.body, res);
})

app.delete('/tour/:id', (req, res) =>{
    service.deleteTour(req.params.id, res);
})

app.delete('/tours', (req, res) =>{
    service.deleteTours(res);
})

app.put('/tour/:id', (req, res) =>{
    service.updateTour(req.body,req.params.id, res);
})


app.get('/reservation/all', (req, res) =>{
    service.getReservations(res);
})


app.get('/reservation/:id', (req, res) =>{
    service.getReservation({_id:req.params.id}, res);
})

app.get('/reservation/user/:user', (req, res) =>{
    service.getReservation({user:req.params.user}, res);
})

app.get('/reservation/user/:user/tour/:tourId', (req, res) =>{
    service.getReservation({user:req.params.user, tourId:req.params.tourId}, res);
})

app.post('/reservation', (req, res) =>{
    service.addReservation(req.body, res);
})

app.delete('/reservation/:id', (req, res) =>{
    service.deleteReservation(req.params.id, res);
})

app.delete('/reservations', (req, res) =>{
    service.deleteReservations(res);
})

app.put('/reservation/:id', (req, res) =>{
    service.updateReservation(req.body,req.params.id, res);
})

service.init()
app.listen(3000);
