var expressJS = require('express');

app = expressJS();

app.post("/", function (request,response){

    let fastName = request.query.fname;
    let lastName = request.query.lname;

    response.end(fastName+" "+lastName);

})


app.listen(3000,function (){
    console.log("Server Run Success");
})