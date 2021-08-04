var expressJS = require('express');

app = expressJS();

app.get("/cookie", function (request,response){

    response.cookie('name','Nirob');
    response.cookie('city','Dhaka');
    response.cookie('age','23');

    response.status(201).end("Cookie Set Success");

})


app.listen(3000,function (){
    console.log("Server Run Success");
})