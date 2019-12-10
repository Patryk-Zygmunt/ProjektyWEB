let mongoose = require('mongoose');
//let url ="mongodb+srv://spol-user:spoldbpass@spolecznidb-zr43h.mongodb.net/stat?retryWrites=true"

const url = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost:27017/wiki-animals?waitQueueMultiple=1";

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(url)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error',err)
    })
    }
}

module.exports = new Database()
