const bcrypt = require('bcrypt')//  When you use bcrypt, it needs to be here.  DO NOT MOVE!
const mongoose = require('mongoose')
require('../models/MODEL.js')
var MODEL = mongoose.model('MODEL')//  Change 'MODEL' to whatever you called the collection in mongoose.js

module.exports ={
    home:(req, res) => {
        res.render('index')
    }
}