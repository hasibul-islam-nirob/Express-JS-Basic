var expressJS = require('express');

app = expressJS();

app.get("/", function (request,response){

    let fastname = request.header('fname');
    let lastname = request.header('lname');

    response.end(fastname +" "+lastname);

})


app.listen(3000,function (){
    console.log("Server Run Success");
})