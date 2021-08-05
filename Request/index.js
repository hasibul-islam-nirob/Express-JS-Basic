var expressJS = require('express');

app = expressJS();

app.get("/", function (request,response){

    let fastname = request.header('fname');
    let lastname = request.header('lname');
    let UserAgent = request.header('User-Agent');

    response.end(fastname +" "+lastname+" "+UserAgent);

})


app.listen(3000,function (){
    console.log("Server Run Success");
})