var expressJS = require('express');
var bodyParser = require('body-parser');

var app = expressJS();
// parse application/json
app.use(bodyParser.json());

app.post("/", function (request,response){

    let jsonData = request.body;
    let jsonString = JSON.stringify(jsonData);

    response.send(jsonString);

})


app.listen(3000,function (){
    console.log("Server Run Success");
})