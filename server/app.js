var connect = require('connect');
var serveStatic = require('serve-static');
connect().use( serveStatic("../../Angular\HelloWorls\dist\HelloWorls")).listen(5000);

var cors = require('cors')
const bodyParser = require("body-parser");
var express = require('express');
var service = require('./service');
var authService = require('./auth');
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
const io = require("socket.io")(http, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": 'http://localhost:4200', //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});

app.use(cors({credentials: true, origin: 'http://localhost:4200'}))

app.use(bodyParser.json());
//app.use(authService.jwt());



app.post('/auth', (req, res)=> {
    authService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).send())
})

app.get('/users',async (req, res)=> {
    let r = await authService.getAll();
    res.send(r)
})

app.post('/signup', (req, res)=> {
    authService.signup(req.body)
        .then(user => res.status(201).json(user))
})


app.delete('/all', (req, res) =>{
    service.deleteReservations(res);
    service.deleteTours(res);

})



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

app.put('/tour/:id', async (req, res) =>{
   var r = await service.updateTour(req.body,req.params.id);
   if(req.body.price) io.emit("sale",{...{_id:req.params.id},...req.body})
   res.send(r)
})

app.get('/reservation/all', (req, res) =>{
    service.getReservations({},res);
})


app.get('/reservation/:id', (req, res) =>{
    service.getReservation({_id:req.params.id}, res);
})

app.get('/reservation/user/:user', (req, res) =>{
    service.getReservations({user:req.params.user}, res);
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
io.on('connection', function (socket) {
});
app.listen(3000);


module.exports = app;
