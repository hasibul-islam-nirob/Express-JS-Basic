var expressJS = require('express');

var app = expressJS();

app.use(function (request,response, next) {
    console.log("I'm From Application Middleware");
    next();
})


app.get("/", function (request,response){
    response.send("This is Home Page");
})

app.get("/about", function (request,response){
    response.send("This is About Page");
})

app.get("/contact", function (request,response){
    response.send("This is Contact Page");
})



app.listen(3000,function (){
    console.log("Server Run Success");
})