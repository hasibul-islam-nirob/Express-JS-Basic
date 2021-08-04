var expressJS = require('express');

app = expressJS();

app.get("/cookieClear", function (request,response){

    response.clearCookie('city');
    response.clearCookie('age');

    response.status(200).end("Cookie Clear Success");

})


app.listen(3000,function (){
    console.log("Server Run Success");
})