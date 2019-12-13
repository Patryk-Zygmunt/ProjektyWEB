const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const model = require('./model')

let config = {
    "secret": "sekret",
    "audience": "",
    "issuer": ""
}


exports.jwt = ()=> {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            '/signup',
            '/auth',
            '/tour/all'
        ]
    });
}



exports.authenticate  = async function  authenticate({ login, password }) {
    const user = await model.user.findOne({login:login,password:password})
    if (user) {
        const token = jwt.sign({ sub: user._id }, config.secret); //
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

exports.getAll  = async function getAll() {
    return model.user.find().exec()
}

exports.signup = async (body)=> {
    return model.user.create(body)
}

