var expressJS = require('express');

app = expressJS();

app.get("/stCode", function (request,response){
    response.status(200).end();
    //response.send("This is Phone Page");
})

app.listen(3000,function (){
    console.log("Server Run Success");
})