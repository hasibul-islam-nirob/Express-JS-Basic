var expressJS = require('express');

app = expressJS();

app.get("/nirob", function (request,response){
    response.redirect("/hasib");
})

app.get("/hasib", function (request,response){
    response.send("Hasibul Pages");
})

app.listen(3000,function (){
    console.log("Server Run Success");
})