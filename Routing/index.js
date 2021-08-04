var expressJS = require('express');

app = expressJS();

app.get("/header", function (request,response){

    response.append('name','Nirob');
    response.append('city','Dhaka');
    response.append('age','23');

    response.send("This is Body");
    response.status(201).end();
})


app.listen(3000,function (){
    console.log("Server Run Success");
})