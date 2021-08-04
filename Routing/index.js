var expressJS = require('express');

app = expressJS();

app.get("/header", function (request,response){

    response.append('name','Nirob');
    response.append('city','Dhaka');
    response.append('age','23');

    response.status(201).end("This is Body");
})


app.listen(3000,function (){
    console.log("Server Run Success");
})