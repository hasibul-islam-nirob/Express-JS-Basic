var expressJS = require('express');

app = expressJS();

app.post("/", function (request,response){

    response.end("Simple Post Request");

})


app.listen(3000,function (){
    console.log("Server Run Success");
})