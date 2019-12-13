const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

let config = {
    "secret": "sekret",
    "audience": "",
    "issuer": ""
}


exports.jwt = ()=> {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            '/auth'
        ]
    });
}

const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];


exports.authenticate  = async function  authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, 'sekret');
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

exports.getAll  = async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}


