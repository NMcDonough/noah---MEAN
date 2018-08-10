//  Change 'MODEL_NAME' in this documents filename to whatever you're calling your Document in MongoDB

const mongoose = require('mongoose')

var MODEL = mongoose.model("MODEL", new mongoose.Schema({//    Change 'MODEL' to whatever you you called the database that mongoose connects to.
    //Put document keys and value types here                              This is not exactly required but it helps keep your names organized
}))

module.exports = MODEL//   Rename to whatever you connected to in mongoose.js