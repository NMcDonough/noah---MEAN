var express = require("express");
var path = require("path");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public/src/assets')));
app.set('views', "./public/src"); 
app.set('view engine', 'ejs');
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('public/dist/public/index.html'))
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});