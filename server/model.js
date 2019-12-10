let mongoose = require('mongoose');
let db = require('./db')

let Tour = new mongoose.Schema({
    name:String,
    country:String,
    description:String,
    imageUrl:[String],
    price:Number,
    places:Number,
    maxPlaces:Number,
    start:Date,
    rate:Number,
    rateAmount:Number,
    end:Date,
    comments:[{text:String,date:Date,user:String}]
})


let Reservation = new mongoose.Schema({
    tourId:String,
    user:String,
    start:Date,
    end:Date,
    places:Number,
    cost:Number
  })


exports.tour = mongoose.model('tour', Tour)
exports.reservation = mongoose.model('reservation', Reservation)



