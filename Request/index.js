var expressJS = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var multerInc = multer();
var app = expressJS();

// parse application/json
app.use(bodyParser.json());
app.use(multerInc.array());
app.use(expressJS.static('public'));


app.post("/", function (request,response){

    let jsonData = request.body;
    let jsonString = JSON.stringify(jsonData);
    //let name = jsonData['name'];
    //let city = jsonData['city'];

    response.send(jsonString);
    //response.send(name+"  "+city);

})


app.listen(3000,function (){
    console.log("Server Run Success");
})