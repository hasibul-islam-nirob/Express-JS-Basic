var expressJS = require('express');

var app = expressJS();

app.get("/", function (request,response){
    response.send("This is Home Page");
})


app.use("/about", function (request,response, next) {
    console.log("I'm From About Middleware");
    next();
})

app.get("/about", function (request,response){
    response.send("This is About Page");
})


app.use("/contact", function (request,response, next) {
    console.log("I'm From Contact Middleware");
    next();
})
app.get("/contact", function (request,response){
    response.send("This is Contact Page");
})



app.listen(3000,function (){
    console.log("Server Run Success");
})