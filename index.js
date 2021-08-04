var expressJS = require('express');

app = expressJS();

app.get("/", function (request,response){
    response.send("Hello Programmer !! This is Express JS Project");
})

app.listen(2000,function (){
    console.log("Server Run Success");
})