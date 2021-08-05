var expressJS = require('express');

app = expressJS();

app.get("/", function (request,response){


    response.send("Simple Get Request");
})


app.listen(3000,function (){
    console.log("Server Run Success");
})