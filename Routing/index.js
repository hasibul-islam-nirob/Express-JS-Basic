var expressJS = require('express');

app = expressJS();

app.get("/downloadFile", function (request,response){

    //response.download(' Your Path Location ');
    response.download('./upload/nirob.png');
})

app.listen(3000,function (){
    console.log("Server Run Success");
})