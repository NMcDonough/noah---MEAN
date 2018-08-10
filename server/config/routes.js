const controller = require('../controllers/controller.js')//    'controller' can be whatever you chose to use for the name of controller.js if you want
const path = require("path");

module.exports = function(app) {
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    })
}