const model = require('./model');
let fs  = require('fs')


exports.getTours = (res) => {
    model.tour.find((err,result)=>{
        res.send(result)
    })
}


exports.getTour = (id, res)=> {
    console.log(id)
    model.tour.findOne({_id:id},(err,result)=>{
        res.send(result)
    })
}


exports.addTour = (body, res)=> {
    console.log(body)
    model.tour.create(body,(err,result)=>{
        res.send(result)
    })

}

exports.deleteTour = (id, res)=> {
    console.log(id)
    model.tour.deleteOne({_id:id},(err,result)=>{
        res.send(result)
    })
}

exports.deleteTours = (id, res)=> {
    console.log(id)
    model.tour.deleteMany({},(err,result)=>{
        res.send(result)
    })
}

exports.updateTour = (body,id, res)=> {
    console.log(body,id)
    model.tour.updateOne({_id:id},body,(err,result)=>{
        res.send(result)
    })

}



exports.getReservations = (res) => {
    model.reservation.find((err,result)=>{
        res.send(result)
    })
}


exports.getReservation = (filter, res)=> {
    model.reservation.findOne(filter,(err,result)=>{
        res.send(result)
    })
}


exports.addReservation = (body, res)=> {
    console.log(body)
    model.reservation.create(body,(err,result)=>{
        res.send(result)
    })

}

exports.deleteReservation = (id, res)=> {
    console.log(id)
    model.reservation.deleteOne({_id:id},(err,result)=>{
        res.send(result)
    })
}

exports.deleteReservations = (id, res)=> {
    console.log(id)
    model.reservation.deleteMany({},(err,result)=>{
        res.send(result)
    })
}

exports.updateReservation = (body,id, res)=> {
    console.log(body,id)
    model.reservation.updateOne({_id:id},body,(err,result)=>{
        res.send(result)
    })

}


 exports.init = () => {
    fs.readFile('./data.json', async (err, data) => {
        await model.tour.deleteMany();
        model.tour.create(JSON.parse(data), (err, result) => {
            //console.log('Init: ', result)
        })
    })
 }

