const Router = require('express').Router();
const db = require('../models');

Router.get ('/', (req, res) => {
    db.Member.find()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log('ERROR: API Members /: db find failed');
    })
})


module.exports = Router;