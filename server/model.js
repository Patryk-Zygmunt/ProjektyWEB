let mongoose = require('mongoose');
let db = require('./db')

let Tour = new mongoose.Schema({
    id:String,
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
    places:Number
  })


module.exports.tour = mongoose.model('tour', Tour)
module.exports.reservation = mongoose.model('reservation', Reservation)